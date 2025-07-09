---
title: "Matter Protokolü ile Akıllı Ev Entegrasyonu"
description: "Matter protokolü kullanarak farklı markaların akıllı ev cihazlarını nasıl entegre edebiliriz?"
date: "2024-01-10"
author: "Tuncay"
tags: ["Matter", "Smart Home", "IoT", "Thread", "WiFi"]
featured: false
---

# Matter Protokolü ile Akıllı Ev Entegrasyonu

Matter, akıllı ev cihazlarının birbiriyle uyumlu çalışmasını sağlayan yeni nesil bir protokoldür. Bu yazıda Matter'ın nasıl çalıştığını ve kendi projelerinizde nasıl kullanabileceğinizi öğreneceğiz.

## Matter Nedir?

Matter (Thread + WiFi + Ethernet), Apple, Google, Amazon ve Samsung gibi büyük teknoloji şirketlerinin birlikte geliştirdiği açık kaynak akıllı ev standardıdır. Temel özellikleri:

- **Interoperability (Birlikte Çalışabilirlik)**
- **Local Control (Yerel Kontrol)**
- **Security by Design (Tasarımdan Güvenlik)**
- **Simplified Setup (Basit Kurulum)**
- **Thread ve WiFi Desteği**

## ESP32 ile Matter Cihazı Geliştirme

```cpp
#include "esp_matter.h"
#include "esp_matter_ota.h"
#include "esp_matter_console.h"
#include "nvs_flash.h"

using namespace esp_matter;
using namespace esp_matter::cluster;

static const char *TAG = "matter_light";

static void app_event_cb(const ChipDeviceEvent *event, intptr_t arg)
{
    switch (event->Type) {
    case chip::DeviceLayer::DeviceEventType::kInterfaceIpAddressChanged:
        ESP_LOGI(TAG, "Interface IP Address changed");
        break;
    default:
        break;
    }
}

void app_main()
{
    esp_err_t err = ESP_OK;
    
    // Initialize NVS
    nvs_flash_init();
    
    // Create Matter node
    node::config_t node_config;
    node_t *node = node::create(&node_config, app_event_cb, NULL);
    
    // Create endpoint
    endpoint::config_t endpoint_config;
    endpoint_config.endpoint_id = 1;
    endpoint::create(node, &endpoint_config);
    
    // Start Matter stack
    esp_matter::start(app_event_cb);
    esp_matter_console::init();
}
```

## Matter Cihaz Tipleri

Matter protokolü birçok farklı akıllı ev cihazını destekler:

- **Lighting (Aydınlatma)**: Akıllı ampuller, dimmerlar
- **HVAC**: Termostatlar, klima kontrolleri
- **Security**: Sensörler, kameralar, akıllı kilitler
- **Appliances**: Çamaşır makinesi, bulaşık makinesi
- **Window Coverings**: Akıllı perdeler, jaluziler

## Thread Ağı Konfigürasyonu

```cpp
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_log.h"
#include "esp_matter_thread.h"

static const char *TAG = "thread_config";

void configure_thread_network() {
    esp_matter_thread_config_t thread_config = {
        .channel = 11,
        .panid = 0x1234,
        .extpanid = {0x11, 0x11, 0x11, 0x11, 0x22, 0x22, 0x22, 0x22},
        .network_name = "MatterThread",
        .network_key = {0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77,
                       0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff}
    };
    
    esp_err_t err = esp_matter_thread_set_config(&thread_config);
    if (err != ESP_OK) {
        ESP_LOGE(TAG, "Thread configuration failed: %s", esp_err_to_name(err));
    }
}
```

## Matter Commissioning Süreci

Matter cihazlarının ağa eklenmesi (commissioning) süreci:

1. **Setup Code Generation**: QR kod veya PIN oluşturma
2. **Discovery**: Cihazın ağda keşfedilmesi
3. **Authentication**: Güvenli kimlik doğrulama
4. **Network Configuration**: WiFi/Thread ağ ayarları
5. **Operational Credentials**: Sertifika yükleme

```cpp
void start_commissioning() {
    // Setup discriminator and passcode
    uint16_t discriminator = 3840;
    uint32_t passcode = 20202021;
    
    // Generate QR code data
    char qr_code_url[256];
    esp_matter_get_qr_code_url(qr_code_url, sizeof(qr_code_url), 
                              discriminator, passcode);
    
    ESP_LOGI(TAG, "QR Code: %s", qr_code_url);
    ESP_LOGI(TAG, "Manual pairing code: %lu", passcode);
}
```

## Gelecek ve Avantajlar

Matter protokolü akıllı ev ekosisteminde devrim yaratacak özelliklere sahip:

- **Vendor Lock-in Sorununun Çözümü**
- **Basit Kurulum ve Yönetim**
- **Yerel Ağda Çalışma**
- **Güçlü Güvenlik Standartları**
- **Geniş Platform Desteği**

Matter, akıllı ev cihazlarının geleceğini şekillendiren en önemli protokollerden biri haline gelecek.
