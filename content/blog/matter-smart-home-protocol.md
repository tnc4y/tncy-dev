---
title: "Matter Protokolü ile Akıllı Ev Cihazları"
description: "Matter protokolü kullanarak farklı markaların akıllı ev cihazlarını nasıl entegre ederiz?"
date: "2024-01-10"
author: "Tuncay"
tags: ["Matter", "Thread", "WiFi", "ESP32", "Smart Home", "IoT"]
featured: false
---

# Matter Protokolü ile Akıllı Ev Cihazları

Matter, akıllı ev cihazları arasında güvenli ve güvenilir iletişim sağlayan yeni nesil IoT protokolüdür. Bu yazıda Matter'ın temel özelliklerini ve ESP32 ile nasıl kullanılacağını inceleyeceğiz.

## Matter Nedir?

Matter (eski adıyla Project CHIP), Connectivity Standards Alliance tarafından geliştirilen açık kaynak akıllı ev standardıdır. Farklı markaların cihazlarının birbiriyle uyumlu çalışmasını sağlar:

- **Interoperability (Birlikte Çalışabilirlik)**
- **Güvenlik ve Gizlilik**
- **IPv6 Tabanlı**
- **Thread ve WiFi Desteği**
- **Local Network Kontrolü**

## Matter Mimarisi

Matter protokolü katmanlı bir yapıya sahiptir:

```c
// Matter Application Layer
typedef struct {
    uint16_t endpoint_id;
    uint32_t cluster_id;
    uint16_t attribute_id;
    uint8_t* data;
    size_t data_length;
} matter_attribute_t;

// Interaction Model
typedef enum {
    MATTER_CMD_READ_ATTRIBUTE,
    MATTER_CMD_WRITE_ATTRIBUTE,
    MATTER_CMD_INVOKE_COMMAND,
    MATTER_CMD_SUBSCRIBE
} matter_command_type_t;
```

## ESP32 ile Matter Cihazı

ESP32 üzerinde Matter destekli akıllı lamba örneği:

```c
#include "esp_matter.h"
#include "esp_matter_ota.h"

// Device Type: On/Off Light
static const uint32_t DEVICE_TYPE_ON_OFF_LIGHT = 0x0100;

typedef struct {
    bool power_state;
    uint8_t brightness;
} light_device_t;

light_device_t light_device = {
    .power_state = false,
    .brightness = 100
};

// Attribute callback function
esp_err_t attribute_callback(uint16_t endpoint_id, uint32_t cluster_id, 
                           uint16_t attribute_id, esp_matter_attr_val_t *val) {
    
    if (cluster_id == chip::app::Clusters::OnOff::Id) {
        if (attribute_id == chip::app::Clusters::OnOff::Attributes::OnOff::Id) {
            light_device.power_state = val->val.b;
            // GPIO kontrolü
            gpio_set_level(LED_GPIO, light_device.power_state);
            ESP_LOGI("MATTER", "Light %s", light_device.power_state ? "ON" : "OFF");
        }
    }
    
    return ESP_OK;
}

void app_main() {
    // Matter node initialization
    esp_matter_node_t *node = esp_matter_node_create();
    
    // Endpoint creation
    esp_matter_endpoint_t *endpoint = esp_matter_endpoint_create(node, 
                                                               DEVICE_TYPE_ON_OFF_LIGHT, 
                                                               ESP_MATTER_ENDPOINT_FLAG_DESTROYABLE);
    
    // On/Off cluster ekleme
    esp_matter_cluster_t *on_off_cluster = esp_matter_cluster_create(endpoint, 
                                                                   chip::app::Clusters::OnOff::Id, 
                                                                   ESP_MATTER_CLUSTER_FLAG_SERVER);
    
    // Attribute ekleme
    esp_matter_attribute_create(on_off_cluster, 
                              chip::app::Clusters::OnOff::Attributes::OnOff::Id,
                              ESP_MATTER_ATTRIBUTE_FLAG_READABLE | ESP_MATTER_ATTRIBUTE_FLAG_WRITABLE,
                              esp_matter_bool(false));
    
    // Matter stack başlatma
    esp_matter_start(attribute_callback);
    
    ESP_LOGI("MATTER", "Matter device started");
}
```

## Thread Network Konfigürasyonu

Matter cihazları Thread ağında çalışabilir:

```c
#include "esp_openthread.h"

void thread_init() {
    // OpenThread configuration
    esp_openthread_platform_config_t config = {
        .radio_config = ESP_OPENTHREAD_DEFAULT_RADIO_CONFIG(),
        .host_config = ESP_OPENTHREAD_DEFAULT_HOST_CONFIG(),
        .port_config = ESP_OPENTHREAD_DEFAULT_PORT_CONFIG(),
    };
    
    // Thread network parameters
    esp_openthread_set_extended_panid((uint8_t[]){0x12, 0x34, 0x56, 0x78, 0x9a, 0xbc, 0xde, 0xf0});
    esp_openthread_set_network_name("MatterHome");
    esp_openthread_set_network_key((uint8_t[]){0x00, 0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77,
                                              0x88, 0x99, 0xaa, 0xbb, 0xcc, 0xdd, 0xee, 0xff});
    
    ESP_ERROR_CHECK(esp_openthread_init(&config));
    ESP_ERROR_CHECK(esp_openthread_launch_mainloop());
}
```

## Matter Commissioning

Yeni cihazları ağa ekleme süreci:

```c
// QR Code generation for commissioning
void generate_qr_code() {
    esp_matter_factory_data_t factory_data;
    esp_matter_factory_data_init(&factory_data);
    
    // Setup payload generation
    char setup_payload[256];
    esp_matter_get_setup_payload(setup_payload, sizeof(setup_payload), 
                                ESP_MATTER_QR_CODE_URL);
    
    ESP_LOGI("MATTER", "Setup QR Code: %s", setup_payload);
}
```

## Avantajları

Matter protokolünün sağladığı avantajlar:

- **Vendor Agnostic**: Marka bağımsızlığı
- **Local Control**: İnternet bağımlılığı yok
- **Security**: End-to-end şifreleme
- **Future-Proof**: Güncellenebilir standart
- **IPv6 Ready**: Modern network desteği

## Sonuç

Matter protokolü, akıllı ev ekosistemini standardize ederek farklı markaların cihazlarının sorunsuz çalışmasını sağlar. ESP32 gibi platformlarla kolayca Matter uyumlu cihazlar geliştirebilir, güvenli ve interoperable IoT çözümleri oluşturabilirsiniz.
