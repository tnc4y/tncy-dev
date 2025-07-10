import { PersonalInfo, Project, Experience, Education } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Tuncay",
  title: "Embedded Systems & IoT Developer",
  email: "tuncay@example.com",
  location: "İstanbul, Türkiye",
  bio: "Gömülü sistemler ve IoT teknolojilerinde uzman geliştirici. STM32, ESP32, LoRa, Matter protokolü ve mobil uygulama geliştirme konularında deneyimli. C/C++, Python, Dart/Flutter ile projeler geliştiriyorum.",
  socialLinks: {
    github: "https://github.com/tuncay",
    linkedin: "https://linkedin.com/in/tuncay",
    twitter: "https://twitter.com/tuncay",
    website: "https://tuncay.dev"
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "IoT Smart Home System",
    description: "ESP32 tabanlı akıllı ev sistemi. LoRaWAN ile uzun mesafeli iletişim, Matter protokolü desteği ve Flutter mobil uygulaması.",
    technologies: ["ESP32", "LoRaWAN", "Matter", "Flutter", "Firebase", "C++", "Dart"],
    demoUrl: "https://smart-home-demo.com",
    githubUrl: "https://github.com/tuncay/iot-smart-home",
    featured: true
  },
  {
    id: "2",
    title: "Industrial IoT Monitoring",
    description: "STM32 mikrokontrolcü ile endüstriyel sensör izleme sistemi. I2C/UART iletişimi, WiFi bağlantısı ve gerçek zamanlı veri analizi.",
    technologies: ["STM32", "FreeRTOS", "I2C", "UART", "WiFi", "Python", "InfluxDB"],
    githubUrl: "https://github.com/tuncay/industrial-iot",
    featured: true
  },
  {
    id: "3",
    title: "LoRa Weather Station Network",
    description: "Çoklu LoRa sensör ağı ile hava durumu izleme sistemi. Düşük güç tüketimi ve uzun menzilli iletişim.",
    technologies: ["ESP32", "LoRa", "SX1276", "Battery Management", "C++", "MQTT"],
    githubUrl: "https://github.com/tuncay/lora-weather-network",
    featured: true
  },
  {
    id: "4",
    title: "Flutter IoT Controller App",
    description: "ESP32 cihazları için geliştirilen Flutter mobil uygulaması. Bluetooth LE ve WiFi üzerinden cihaz kontrolü.",
    technologies: ["Flutter", "Dart", "Bluetooth LE", "WiFi", "Provider", "ESP32"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.tuncay.iotcontroller",
    githubUrl: "https://github.com/tuncay/flutter-iot-controller",
    featured: true
  },
  {
    id: "5",
    title: "STM32 Motor Control System",
    description: "STM32F4 ile BLDC motor kontrol sistemi. FOC algoritması, encoder feedback ve CAN bus iletişimi.",
    technologies: ["STM32F4", "FOC Algorithm", "CAN Bus", "Encoder", "C", "STM32CubeIDE"],
    githubUrl: "https://github.com/tuncay/stm32-motor-control",
    featured: false
  },
  {
    id: "6",
    title: "Wearable Health Monitor",
    description: "ESP32-C3 tabanlı giyilebilir sağlık izleme cihazı. Kalp ritmi, sıcaklık ve hareket sensörleri ile mobil uygulama entegrasyonu.",
    technologies: ["ESP32-C3", "MAX30102", "MPU6050", "Flutter", "BLE", "Firebase"],
    githubUrl: "https://github.com/tuncay/wearable-health-monitor",
    featured: false
  },
  {
    id: "7",
    title: "Matter Thread Border Router",
    description: "ESP32-H2 ile Matter Thread Border Router implementasyonu. Thread ağı yönetimi ve Matter cihaz komisyonu.",
    technologies: ["ESP32-H2", "Matter", "Thread", "OpenThread", "WiFi", "C++"],
    githubUrl: "https://github.com/tuncay/matter-thread-router",
    featured: false
  },
  {
    id: "8",
    title: "Arduino Sensor Library",
    description: "Çeşitli sensörler için Arduino kütüphanesi. I2C/SPI iletişimi, kalibrasyon ve veri filtreleme özellikleri.",
    technologies: ["Arduino", "I2C", "SPI", "C++", "PlatformIO", "Unit Testing"],
    githubUrl: "https://github.com/tuncay/arduino-sensor-lib",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "IoT Solutions Inc.",
    position: "Senior Embedded Systems Engineer",
    startDate: "2022-03",
    description: "Gömülü sistemler ve IoT çözümleri geliştirme ekibi liderliği. STM32 ve ESP32 tabanlı projeler, LoRaWAN ağ implementasyonu ve Matter protokolü entegrasyonu. Takım verimliliğini %45 artırdım.",
    technologies: ["STM32", "ESP32", "LoRaWAN", "Matter", "FreeRTOS", "C/C++", "Python"],
    location: "İstanbul, Türkiye"
  },
  {
    id: "2",
    company: "Smart Tech Devices",
    position: "Embedded Software Developer",
    startDate: "2020-06",
    endDate: "2022-02",
    description: "Akıllı cihazlar için firmware geliştirme. I2C/UART/SPI protokolleri, sensör entegrasyonu ve mobil uygulama bağlantısı. Flutter ile cross-platform mobil uygulamalar geliştirdim.",
    technologies: ["ESP32", "Arduino", "I2C", "UART", "SPI", "Flutter", "Dart", "Bluetooth LE"],
    location: "İstanbul, Türkiye"
  },
  {
    id: "3",
    company: "Industrial Automation Ltd.",
    position: "Junior Embedded Engineer",
    startDate: "2019-01",
    endDate: "2020-05",
    description: "Endüstriyel otomasyon sistemleri geliştirme. PLC programlama, sensör kalibrasyonu ve veri toplama sistemleri. C dili ve mikroişlemci programlama deneyimi.",
    technologies: ["STM32", "C", "Modbus", "CAN Bus", "Python", "HMI"],
    location: "İstanbul, Türkiye"
  }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "Çukurova Üniversitesi",
    degree: "Lisans",
    field: "Computer Science",
    startDate: "2024-09",
    endDate: "2028-06",
    description: "Gömülü sistemler, mikroişlemciler, dijital sinyal işleme, kontrol sistemleri ve elektronik devre tasarımı üzerine kapsamlı eğitim.",
    gpa: "3.2/4.0"
  },
  {
    id: "2",
    institution: "Espressif Systems",
    degree: "Sertifika",
    field: "ESP32 Advanced Development",
    startDate: "2023-01",
    endDate: "2023-03",
    description: "ESP32 serisi mikrokontrolcüler için gelişmiş geliştirme teknikleri, WiFi/Bluetooth implementasyonu ve güç yönetimi."
  },
  {
    id: "3",
    institution: "STMicroelectronics",
    degree: "Sertifika",
    field: "STM32 Professional Development",
    startDate: "2022-06",
    endDate: "2022-08",
    description: "STM32 mikrokontrolcüler için profesyonel firmware geliştirme, HAL kütüphaneleri ve real-time sistemler."
  },
  {
    id: "4",
    institution: "Matter Alliance",
    degree: "Sertifika",
    field: "Matter Protocol Specialist",
    startDate: "2023-09",
    endDate: "2023-11",
    description: "Matter protokolü, Thread ağları ve akıllı ev cihazları için interoperabilite standartları."
  }
];
