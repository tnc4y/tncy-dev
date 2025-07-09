---
title: "ESP32 ile IoT Projelerine Başlangıç"
description: "ESP32 mikrokontrolcü ile IoT projelerine nasıl başlanır? WiFi, Bluetooth ve sensör entegrasyonu ile ilk projenizi geliştirin."
date: "2024-12-15"
author: "Tuncay"
tags: ["ESP32", "IoT", "Arduino", "WiFi", "Bluetooth"]
featured: true
---

# ESP32 ile IoT Projelerine Başlangıç

ESP32, güçlü WiFi ve Bluetooth yetenekleriyle IoT projelerinin vazgeçilmez parçası haline gelmiştir. Bu yazıda ESP32 ile nasıl başlayacağınızı ve ilk projenizi nasıl geliştireceğinizi öğreneceksiniz.

## ESP32 Nedir?

ESP32, Espressif Systems tarafından geliştirilen, WiFi ve Bluetooth özelliklerine sahip düşük maliyetli bir mikrokontrolcüdür. Dual-core işlemci, geniş GPIO pin sayısı ve düşük güç tüketimi ile projeleriniz için ideal bir seçimdir.

### Temel Özellikler

- **Dual-core Tensilica Xtensa LX6 mikroişlemci**
- **WiFi 802.11 b/g/n desteği**
- **Bluetooth v4.2 BR/EDR ve BLE**
- **34 adet GPIO pin**
- **12-bit ADC ve 8-bit DAC**
- **I2C, SPI, UART iletişim protokolleri**

## Geliştirme Ortamının Kurulumu

ESP32 ile geliştirme yapmak için birkaç farklı yöntem kullanabilirsiniz:

### Arduino IDE ile Geliştirme

```cpp
#include "WiFi.h"

const char* ssid = "WiFi_Adınız";
const char* password = "WiFi_Şifreniz";

void setup() {
  Serial.begin(115200);
  
  // WiFi bağlantısını başlat
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi'ye bağlanıyor...");
  }
  
  Serial.println("WiFi bağlantısı başarılı!");
  Serial.print("IP Adresi: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  // Ana döngü
  delay(1000);
}
```

### ESP-IDF ile Profesyonel Geliştirme

ESP-IDF (Espressif IoT Development Framework), ESP32 için resmi geliştirme ortamıdır:

```c
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_wifi.h"
#include "esp_log.h"

static const char *TAG = "WiFi_Example";

void wifi_init_sta(void) {
    ESP_ERROR_CHECK(esp_netif_init());
    ESP_ERROR_CHECK(esp_event_loop_create_default());
    esp_netif_create_default_wifi_sta();

    wifi_init_config_t cfg = WIFI_INIT_CONFIG_DEFAULT();
    ESP_ERROR_CHECK(esp_wifi_init(&cfg));
    
    // WiFi konfigürasyonu
    wifi_config_t wifi_config = {
        .sta = {
            .ssid = "WiFi_Adınız",
            .password = "WiFi_Şifreniz",
        },
    };
    
    ESP_ERROR_CHECK(esp_wifi_set_mode(WIFI_MODE_STA));
    ESP_ERROR_CHECK(esp_wifi_set_config(WIFI_IF_STA, &wifi_config));
    ESP_ERROR_CHECK(esp_wifi_start());
    
    ESP_LOGI(TAG, "WiFi başlatıldı");
}
```

## İlk IoT Projesi: Sıcaklık Sensörü

Basit bir sıcaklık izleme projesi geliştirelim:

### Gerekli Malzemeler

- ESP32 geliştirme kartı
- DS18B20 sıcaklık sensörü
- 4.7kΩ direnc (pull-up için)
- Breadboard ve jumper kablolar

### Devre Bağlantısı

```
ESP32 GPIO 4 --> DS18B20 Data Pin
ESP32 3.3V   --> DS18B20 VCC
ESP32 GND    --> DS18B20 GND
4.7kΩ direnc --> VCC ve Data Pin arasında
```

### Kod Implementasyonu

```cpp
#include <OneWire.h>
#include <DallasTemperature.h>
#include <WiFi.h>
#include <WebServer.h>

#define ONE_WIRE_BUS 4
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

const char* ssid = "WiFi_Adınız";
const char* password = "WiFi_Şifreniz";

WebServer server(80);

void setup() {
  Serial.begin(115200);
  sensors.begin();
  
  // WiFi bağlantısı
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi'ye bağlanıyor...");
  }
  
  Serial.println("WiFi bağlandı!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
  
  // Web server rotaları
  server.on("/", handleRoot);
  server.on("/temperature", handleTemperature);
  server.begin();
  
  Serial.println("Web server başlatıldı");
}

void handleRoot() {
  String html = "<html><body>";
  html += "<h1>ESP32 Sıcaklık Sensörü</h1>";
  html += "<p><a href='/temperature'>Sıcaklığı Oku</a></p>";
  html += "</body></html>";
  
  server.send(200, "text/html", html);
}

void handleTemperature() {
  sensors.requestTemperatures();
  float temperature = sensors.getTempCByIndex(0);
  
  String json = "{\"temperature\":";
  json += String(temperature);
  json += ",\"unit\":\"C\"}";
  
  server.send(200, "application/json", json);
}

void loop() {
  server.handleClient();
  delay(10);
}
```

## Bluetooth ile Mobil Uygulama Bağlantısı

ESP32'nin Bluetooth özelliğini kullanarak mobil uygulamalarla iletişim kurabilirsiniz:

```cpp
#include "BluetoothSerial.h"

BluetoothSerial SerialBT;

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_Device"); // Bluetooth cihaz adı
  Serial.println("Cihaz Bluetooth ile bağlantı için hazır");
}

void loop() {
  if (Serial.available()) {
    SerialBT.write(Serial.read());
  }
  if (SerialBT.available()) {
    Serial.write(SerialBT.read());
  }
  delay(20);
}
```

## Güç Yönetimi ve Pil Optimizasyonu

IoT projelerinde pil ömrü kritiktir. ESP32'nin deep sleep özelliğini kullanarak güç tüketimini minimize edebilirsiniz:

```cpp
#include "esp_sleep.h"

#define uS_TO_S_FACTOR 1000000
#define TIME_TO_SLEEP  30        // 30 saniye uyku

void setup() {
  Serial.begin(115200);
  
  // Sensör okuma ve veri gönderme işlemleri
  readSensorAndSendData();
  
  // Deep sleep moduna geç
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("ESP32, " + String(TIME_TO_SLEEP) + " saniye uyuyacak");
  esp_deep_sleep_start();
}

void readSensorAndSendData() {
  // Sensör okuma ve veri gönderme kodları
  Serial.println("Sensör verileri okunuyor...");
  delay(1000);
}

void loop() {
  // Bu kod deep sleep modunda çalışmaz
}
```

## Sonuç

ESP32, IoT projeleriniz için güçlü ve esnek bir platform sunar. WiFi ve Bluetooth yetenekleri, geniş GPIO seçenekleri ve düşük güç tüketimi ile projelerinizi hayata geçirebilirsiniz.

Bir sonraki yazımızda, ESP32 ile LoRaWAN entegrasyonu ve uzun mesafeli IoT iletişimi konularını ele alacağız.

## Faydalı Kaynaklar

- [ESP32 Resmi Dokümantasyonu](https://docs.espressif.com/projects/esp-idf/en/latest/)
- [Arduino ESP32 Kütüphanesi](https://github.com/espressif/arduino-esp32)
- [ESP32 Pinout Referansı](https://randomnerdtutorials.com/esp32-pinout-reference-gpios/)
