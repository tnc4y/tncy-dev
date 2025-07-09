---
title: "STM32 ile Profesyonel Gömülü Sistem Geliştirme"
description: "STM32 mikrokontrolcüler ile profesyonel gömülü sistem projelerini nasıl geliştirebilirsiniz? HAL kütüphaneleri, FreeRTOS ve debugging teknikleri."
date: "2024-12-10"
author: "Tuncay"
tags: ["STM32", "Embedded", "FreeRTOS", "HAL", "Debugging"]
featured: true
---

# STM32 ile Profesyonel Gömülü Sistem Geliştirme

STM32 mikrokontrolcü ailesi, endüstriyel uygulamalardan tüketici elektroniğine kadar geniş bir yelpazede kullanılan güçlü ARM Cortex-M tabanlı işlemcilerdir. Bu yazıda STM32 ile profesyonel geliştirme tekniklerini öğreneceksiniz.

## STM32 Ekosistemi

STM32 ailesi, farklı performans seviyelerinde çok sayıda mikrokontrolcü sunar:

### Popüler STM32 Serileri

- **STM32F1**: Giriş seviyesi, 72MHz ARM Cortex-M3
- **STM32F4**: Yüksek performans, 180MHz ARM Cortex-M4F (FPU)
- **STM32L4**: Ultra düşük güç tüketimi
- **STM32H7**: En yüksek performans, 480MHz ARM Cortex-M7

## Geliştirme Ortamı Kurulumu

### STM32CubeIDE

STM32CubeIDE, STMicroelectronics'in resmi geliştirme ortamıdır:

```c
// main.c - Temel STM32 projesi
#include "main.h"
#include "stm32f4xx_hal.h"

void SystemClock_Config(void);
static void MX_GPIO_Init(void);

int main(void) {
    // HAL kütüphanesini başlat
    HAL_Init();
    
    // Sistem saatini konfigüre et
    SystemClock_Config();
    
    // GPIO'ları başlat
    MX_GPIO_Init();
    
    while (1) {
        // LED'i yakıp söndür
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        HAL_Delay(500);
    }
}
```

### HAL (Hardware Abstraction Layer) Kullanımı

STM32 HAL kütüphaneleri, donanım soyutlama katmanı sağlar:

```c
// GPIO Konfigürasyonu
static void MX_GPIO_Init(void) {
    GPIO_InitTypeDef GPIO_InitStruct = {0};
    
    // GPIOA saatini etkinleştir
    __HAL_RCC_GPIOA_CLK_ENABLE();
    
    // PA5 pinini çıkış olarak konfigüre et
    GPIO_InitStruct.Pin = GPIO_PIN_5;
    GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
    GPIO_InitStruct.Pull = GPIO_NOPULL;
    GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
    
    HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);
}
```

## FreeRTOS Entegrasyonu

Çoklu görev uygulamaları için FreeRTOS kullanımı:

```c
#include "FreeRTOS.h"
#include "task.h"
#include "queue.h"
#include "semphr.h"

// Görev tanımları
void Task_LED(void *pvParameters);
void Task_UART(void *pvParameters);
void Task_Sensor(void *pvParameters);

// Global değişkenler
QueueHandle_t sensorDataQueue;
SemaphoreHandle_t uartSemaphore;

int main(void) {
    HAL_Init();
    SystemClock_Config();
    MX_GPIO_Init();
    MX_USART2_UART_Init();
    
    // Queue ve semaphore oluştur
    sensorDataQueue = xQueueCreate(10, sizeof(uint16_t));
    uartSemaphore = xSemaphoreCreateMutex();
    
    // Görevleri oluştur
    xTaskCreate(Task_LED, "LED_Task", 128, NULL, 1, NULL);
    xTaskCreate(Task_UART, "UART_Task", 256, NULL, 2, NULL);
    xTaskCreate(Task_Sensor, "Sensor_Task", 256, NULL, 3, NULL);
    
    // Scheduler'ı başlat
    vTaskStartScheduler();
    
    while (1) {
        // Bu kod FreeRTOS çalışırken ulaşılmaz
    }
}

void Task_LED(void *pvParameters) {
    while (1) {
        HAL_GPIO_TogglePin(GPIOA, GPIO_PIN_5);
        vTaskDelay(pdMS_TO_TICKS(1000));
    }
}

void Task_Sensor(void *pvParameters) {
    uint16_t sensorValue;
    
    while (1) {
        // ADC'den sensör değerini oku
        HAL_ADC_Start(&hadc1);
        HAL_ADC_PollForConversion(&hadc1, HAL_MAX_DELAY);
        sensorValue = HAL_ADC_GetValue(&hadc1);
        
        // Queue'ya veri gönder
        xQueueSend(sensorDataQueue, &sensorValue, portMAX_DELAY);
        
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void Task_UART(void *pvParameters) {
    uint16_t receivedData;
    char buffer[50];
    
    while (1) {
        // Queue'dan veri al
        if (xQueueReceive(sensorDataQueue, &receivedData, portMAX_DELAY)) {
            // Mutex ile UART'ı koru
            xSemaphoreTake(uartSemaphore, portMAX_DELAY);
            
            sprintf(buffer, "Sensor Value: %d\r\n", receivedData);
            HAL_UART_Transmit(&huart2, (uint8_t*)buffer, strlen(buffer), HAL_MAX_DELAY);
            
            xSemaphoreGive(uartSemaphore);
        }
    }
}
```

## I2C ile Sensör İletişimi

I2C protokolü ile sensör okuma:

```c
#include "stm32f4xx_hal.h"

#define BME280_I2C_ADDR     0x76 << 1  // BME280 I2C adresi
#define BME280_REG_TEMP     0xFA       // Sıcaklık verisi register

I2C_HandleTypeDef hi2c1;

// I2C konfigürasyonu
void MX_I2C1_Init(void) {
    hi2c1.Instance = I2C1;
    hi2c1.Init.ClockSpeed = 100000;
    hi2c1.Init.DutyCycle = I2C_DUTYCYCLE_2;
    hi2c1.Init.OwnAddress1 = 0;
    hi2c1.Init.AddressingMode = I2C_ADDRESSINGMODE_7BIT;
    hi2c1.Init.DualAddressMode = I2C_DUALADDRESS_DISABLE;
    hi2c1.Init.OwnAddress2 = 0;
    hi2c1.Init.GeneralCallMode = I2C_GENERALCALL_DISABLE;
    hi2c1.Init.NoStretchMode = I2C_NOSTRETCH_DISABLE;
    
    HAL_I2C_Init(&hi2c1);
}

// BME280'den sıcaklık okuma
float readTemperature(void) {
    uint8_t data[3];
    uint32_t rawTemp;
    
    // I2C ile veri oku
    HAL_I2C_Mem_Read(&hi2c1, BME280_I2C_ADDR, BME280_REG_TEMP, 
                     I2C_MEMADD_SIZE_8BIT, data, 3, HAL_MAX_DELAY);
    
    // Ham veriyi birleştir
    rawTemp = (data[0] << 12) | (data[1] << 4) | (data[2] >> 4);
    
    // Kalibrasyon ve dönüştürme (basitleştirilmiş)
    float temperature = ((float)rawTemp / 5120.0) - 273.15;
    
    return temperature;
}
```

## CAN Bus İletişimi

Endüstriyel uygulamalar için CAN bus implementasyonu:

```c
#include "stm32f4xx_hal.h"

CAN_HandleTypeDef hcan1;
CAN_TxHeaderTypeDef TxHeader;
CAN_RxHeaderTypeDef RxHeader;

uint8_t TxData[8];
uint8_t RxData[8];
uint32_t TxMailbox;

// CAN konfigürasyonu
void MX_CAN1_Init(void) {
    hcan1.Instance = CAN1;
    hcan1.Init.Prescaler = 16;
    hcan1.Init.Mode = CAN_MODE_NORMAL;
    hcan1.Init.SyncJumpWidth = CAN_SJW_1TQ;
    hcan1.Init.TimeSeg1 = CAN_BS1_1TQ;
    hcan1.Init.TimeSeg2 = CAN_BS2_1TQ;
    hcan1.Init.TimeTriggeredMode = DISABLE;
    hcan1.Init.AutoBusOff = DISABLE;
    hcan1.Init.AutoWakeUp = DISABLE;
    hcan1.Init.AutoRetransmission = DISABLE;
    hcan1.Init.ReceiveFifoLocked = DISABLE;
    hcan1.Init.TransmitFifoPriority = DISABLE;
    
    HAL_CAN_Init(&hcan1);
}

// CAN mesajı gönder
void CAN_SendMessage(uint32_t id, uint8_t *data, uint8_t length) {
    TxHeader.StdId = id;
    TxHeader.RTR = CAN_RTR_DATA;
    TxHeader.IDE = CAN_ID_STD;
    TxHeader.DLC = length;
    
    HAL_CAN_AddTxMessage(&hcan1, &TxHeader, data, &TxMailbox);
}

// CAN mesajı al
void HAL_CAN_RxFifo0MsgPendingCallback(CAN_HandleTypeDef *hcan) {
    if (HAL_CAN_GetRxMessage(hcan, CAN_RX_FIFO0, &RxHeader, RxData) == HAL_OK) {
        // Alınan mesajı işle
        if (RxHeader.StdId == 0x123) {
            // Belirli ID'li mesaj işleme
            processReceivedData(RxData, RxHeader.DLC);
        }
    }
}
```

## Debugging ve Test Teknikleri

### SWD Debugging

```c
// Debug printf için ITM kullanımı
int _write(int file, char *ptr, int len) {
    for (int i = 0; i < len; i++) {
        ITM_SendChar((*ptr++));
    }
    return len;
}

// Debug makroları
#ifdef DEBUG
    #define DEBUG_PRINT(fmt, ...) printf(fmt, ##__VA_ARGS__)
#else
    #define DEBUG_PRINT(fmt, ...)
#endif

void debugExample(void) {
    DEBUG_PRINT("System started, Clock: %ld Hz\r\n", HAL_RCC_GetHCLKFreq());
}
```

### Unit Testing

```c
// CppUTest ile unit test örneği
#include "CppUTest/TestHarness.h"

TEST_GROUP(TemperatureConverter) {
    void setup() {
        // Test öncesi kurulum
    }
    
    void teardown() {
        // Test sonrası temizlik
    }
};

TEST(TemperatureConverter, CelsiusToFahrenheit) {
    float celsius = 25.0;
    float expected = 77.0;
    float result = celsiusToFahrenheit(celsius);
    
    DOUBLES_EQUAL(expected, result, 0.1);
}
```

## Güvenlik ve Watchdog

```c
// Independent Watchdog (IWDG) konfigürasyonu
IWDG_HandleTypeDef hiwdg;

void MX_IWDG_Init(void) {
    hiwdg.Instance = IWDG;
    hiwdg.Init.Prescaler = IWDG_PRESCALER_64;
    hiwdg.Init.Reload = 4095;
    
    HAL_IWDG_Init(&hiwdg);
}

// Ana döngüde watchdog'u besle
void mainLoop(void) {
    while (1) {
        // Sistem görevleri
        performSystemTasks();
        
        // Watchdog'u yenile
        HAL_IWDG_Refresh(&hiwdg);
        
        HAL_Delay(100);
    }
}
```

## Sonuç

STM32 mikrokontrolcüler, güçlü HAL kütüphaneleri, FreeRTOS desteği ve zengin çevre birimleriyle profesyonel gömülü sistem projeleriniz için ideal bir platformdur. Doğru debugging teknikleri ve test yaklaşımları ile güvenilir sistemler geliştirebilirsiniz.

Bir sonraki yazımızda, LoRaWAN teknolojisi ve uzun mesafeli IoT iletişimi konularını detayıyla ele alacağız.
