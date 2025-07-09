---
title: "Flutter ile IoT Cihazları için Mobil Uygulama Geliştirme"
description: "Dart ve Flutter kullanarak ESP32 ve diğer IoT cihazları için nasıl mobil uygulamalar geliştirebilirsiniz? Bluetooth LE, WiFi ve MQTT entegrasyonu."
date: "2024-12-05"
author: "Tuncay"
tags: ["Flutter", "Dart", "IoT", "Bluetooth LE", "MQTT", "ESP32"]
featured: true
---

# Flutter ile IoT Cihazları için Mobil Uygulama Geliştirme

Modern IoT projelerinde mobil uygulamalar, kullanıcıların cihazlarıyla etkileşimde bulunmasını sağlayan kritik bir bileşendir. Flutter'ın cross-platform yetenekleri sayesinde hem Android hem iOS için tek bir kod tabanıyla IoT uygulamaları geliştirebilirsiniz.

## Flutter IoT Projesi Kurulumu

### Gerekli Paketler

```yaml
# pubspec.yaml
dependencies:
  flutter:
    sdk: flutter
  flutter_bluetooth_serial: ^0.4.0
  wifi_iot: ^0.3.18
  mqtt_client: ^10.0.0
  charts_flutter: ^0.12.0
  shared_preferences: ^2.2.2
  provider: ^6.1.1

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
```

## Bluetooth LE ile ESP32 İletişimi

### Bluetooth Servis Sınıfı

```dart
// services/bluetooth_service.dart
import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';
import 'package:flutter_bluetooth_serial/flutter_bluetooth_serial.dart';

class BluetoothService {
  static final BluetoothService _instance = BluetoothService._internal();
  factory BluetoothService() => _instance;
  BluetoothService._internal();

  BluetoothConnection? _connection;
  StreamSubscription<Uint8List>? _dataSubscription;
  final StreamController<String> _dataController = StreamController<String>.broadcast();

  Stream<String> get dataStream => _dataController.stream;

  // Bluetooth cihazlarını tara
  Future<List<BluetoothDevice>> scanDevices() async {
    List<BluetoothDevice> devices = [];
    
    try {
      // Eşleştirilmiş cihazları al
      List<BluetoothDevice> bondedDevices = 
          await FlutterBluetoothSerial.instance.getBondedDevices();
      
      // ESP32 cihazlarını filtrele
      devices = bondedDevices.where((device) => 
          device.name?.contains('ESP32') ?? false).toList();
      
    } catch (e) {
      print('Cihaz tarama hatası: $e');
    }
    
    return devices;
  }

  // Cihaza bağlan
  Future<bool> connectToDevice(BluetoothDevice device) async {
    try {
      _connection = await BluetoothConnection.toAddress(device.address);
      
      // Veri dinleyicisi
      _dataSubscription = _connection!.input!.listen((data) {
        String message = String.fromCharCodes(data);
        _dataController.add(message);
      });
      
      return true;
    } catch (e) {
      print('Bağlantı hatası: $e');
      return false;
    }
  }

  // Veri gönder
  Future<void> sendData(String data) async {
    if (_connection?.isConnected ?? false) {
      _connection!.output.add(Uint8List.fromList(utf8.encode(data)));
      await _connection!.output.allSent;
    }
  }

  // JSON komut gönder
  Future<void> sendCommand(Map<String, dynamic> command) async {
    String jsonCommand = jsonEncode(command);
    await sendData('$jsonCommand\n');
  }

  // Bağlantıyı kes
  Future<void> disconnect() async {
    await _dataSubscription?.cancel();
    await _connection?.close();
    _connection = null;
  }

  bool get isConnected => _connection?.isConnected ?? false;
}
```

### ESP32 Bluetooth Kodu

```cpp
// ESP32 Bluetooth Serial kodu
#include "BluetoothSerial.h"
#include <ArduinoJson.h>

BluetoothSerial SerialBT;

// Sensör pinleri
#define LED_PIN 2
#define TEMP_SENSOR A0

void setup() {
  Serial.begin(115200);
  SerialBT.begin("ESP32_IoT_Device");
  
  pinMode(LED_PIN, OUTPUT);
  pinMode(TEMP_SENSOR, INPUT);
  
  Serial.println("ESP32 Bluetooth hazır");
}

void loop() {
  // Bluetooth'tan gelen komutları işle
  if (SerialBT.available()) {
    String command = SerialBT.readStringUntil('\n');
    processCommand(command);
  }
  
  // Periyodik sensör verisi gönder
  static unsigned long lastSensorRead = 0;
  if (millis() - lastSensorRead > 5000) {
    sendSensorData();
    lastSensorRead = millis();
  }
  
  delay(100);
}

void processCommand(String command) {
  DynamicJsonDocument doc(1024);
  deserializeJson(doc, command);
  
  String action = doc["action"];
  
  if (action == "led_control") {
    bool state = doc["state"];
    digitalWrite(LED_PIN, state ? HIGH : LOW);
    
    // Yanıt gönder
    DynamicJsonDocument response(256);
    response["type"] = "led_status";
    response["state"] = state;
    
    String responseStr;
    serializeJson(response, responseStr);
    SerialBT.println(responseStr);
    
  } else if (action == "get_sensor") {
    sendSensorData();
  }
}

void sendSensorData() {
  float temperature = readTemperature();
  
  DynamicJsonDocument doc(256);
  doc["type"] = "sensor_data";
  doc["temperature"] = temperature;
  doc["timestamp"] = millis();
  
  String jsonString;
  serializeJson(doc, jsonString);
  SerialBT.println(jsonString);
}

float readTemperature() {
  int rawValue = analogRead(TEMP_SENSOR);
  // Basit sıcaklık dönüşümü (örnek)
  float voltage = (rawValue / 4095.0) * 3.3;
  float temperature = (voltage - 0.5) * 100.0;
  return temperature;
}
```

## Provider State Management

```dart
// providers/iot_provider.dart
import 'package:flutter/foundation.dart';
import '../services/bluetooth_service.dart';
import '../models/sensor_data.dart';

class IoTProvider with ChangeNotifier {
  final BluetoothService _bluetoothService = BluetoothService();
  
  List<BluetoothDevice> _devices = [];
  BluetoothDevice? _connectedDevice;
  bool _isConnected = false;
  bool _ledState = false;
  SensorData? _latestSensorData;
  List<SensorData> _sensorHistory = [];

  // Getters
  List<BluetoothDevice> get devices => _devices;
  BluetoothDevice? get connectedDevice => _connectedDevice;
  bool get isConnected => _isConnected;
  bool get ledState => _ledState;
  SensorData? get latestSensorData => _latestSensorData;
  List<SensorData> get sensorHistory => _sensorHistory;

  IoTProvider() {
    _initializeBluetoothListener();
  }

  void _initializeBluetoothListener() {
    _bluetoothService.dataStream.listen((data) {
      _processIncomingData(data);
    });
  }

  void _processIncomingData(String data) {
    try {
      Map<String, dynamic> json = jsonDecode(data);
      String type = json['type'];

      if (type == 'sensor_data') {
        _latestSensorData = SensorData.fromJson(json);
        _sensorHistory.add(_latestSensorData!);
        
        // Son 100 veriyi tut
        if (_sensorHistory.length > 100) {
          _sensorHistory.removeAt(0);
        }
        
        notifyListeners();
      } else if (type == 'led_status') {
        _ledState = json['state'];
        notifyListeners();
      }
    } catch (e) {
      print('Veri işleme hatası: $e');
    }
  }

  Future<void> scanForDevices() async {
    _devices = await _bluetoothService.scanDevices();
    notifyListeners();
  }

  Future<bool> connectToDevice(BluetoothDevice device) async {
    bool connected = await _bluetoothService.connectToDevice(device);
    if (connected) {
      _connectedDevice = device;
      _isConnected = true;
      notifyListeners();
    }
    return connected;
  }

  Future<void> disconnect() async {
    await _bluetoothService.disconnect();
    _connectedDevice = null;
    _isConnected = false;
    notifyListeners();
  }

  Future<void> toggleLED() async {
    bool newState = !_ledState;
    Map<String, dynamic> command = {
      'action': 'led_control',
      'state': newState,
    };
    
    await _bluetoothService.sendCommand(command);
  }

  Future<void> requestSensorData() async {
    Map<String, dynamic> command = {
      'action': 'get_sensor',
    };
    
    await _bluetoothService.sendCommand(command);
  }
}
```

## Ana Uygulama Ekranı

```dart
// screens/home_screen.dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/iot_provider.dart';
import '../widgets/device_list_widget.dart';
import '../widgets/sensor_chart_widget.dart';
import '../widgets/control_panel_widget.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('IoT Controller'),
        backgroundColor: Colors.blue[800],
        actions: [
          Consumer<IoTProvider>(
            builder: (context, provider, _) {
              return IconButton(
                icon: Icon(provider.isConnected ? 
                    Icons.bluetooth_connected : 
                    Icons.bluetooth_disabled),
                onPressed: () {
                  if (provider.isConnected) {
                    provider.disconnect();
                  } else {
                    _showDeviceSelectionDialog(context);
                  }
                },
              );
            },
          ),
        ],
      ),
      body: Consumer<IoTProvider>(
        builder: (context, provider, _) {
          if (!provider.isConnected) {
            return _buildNotConnectedView(context, provider);
          }
          
          return _buildConnectedView(context, provider);
        },
      ),
    );
  }

  Widget _buildNotConnectedView(BuildContext context, IoTProvider provider) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(
            Icons.bluetooth_disabled,
            size: 80,
            color: Colors.grey[400],
          ),
          SizedBox(height: 20),
          Text(
            'Cihaz Bağlantısı Yok',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.grey[600],
            ),
          ),
          SizedBox(height: 10),
          Text(
            'Bir IoT cihazına bağlanmak için aşağıdaki butona tıklayın',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.grey[500]),
          ),
          SizedBox(height: 30),
          ElevatedButton.icon(
            onPressed: () => _showDeviceSelectionDialog(context),
            icon: Icon(Icons.search),
            label: Text('Cihaz Ara'),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue[800],
              padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildConnectedView(BuildContext context, IoTProvider provider) {
    return SingleChildScrollView(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Bağlı cihaz bilgisi
          Card(
            child: ListTile(
              leading: Icon(Icons.devices, color: Colors.green),
              title: Text('Bağlı Cihaz'),
              subtitle: Text(provider.connectedDevice?.name ?? 'Bilinmeyen Cihaz'),
              trailing: Icon(Icons.circle, color: Colors.green, size: 12),
            ),
          ),
          
          SizedBox(height: 20),
          
          // Kontrol paneli
          Text(
            'Cihaz Kontrolü',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          ControlPanelWidget(),
          
          SizedBox(height: 30),
          
          // Sensör verileri
          Text(
            'Sensör Verileri',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 10),
          SensorChartWidget(),
        ],
      ),
    );
  }

  void _showDeviceSelectionDialog(BuildContext context) {
    showDialog(
      context: context,
      builder: (context) => DeviceListDialog(),
    );
  }
}
```

## Sensör Veri Grafikleri

```dart
// widgets/sensor_chart_widget.dart
import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:provider/provider.dart';
import '../providers/iot_provider.dart';
import '../models/sensor_data.dart';

class SensorChartWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<IoTProvider>(
      builder: (context, provider, _) {
        if (provider.sensorHistory.isEmpty) {
          return Card(
            child: Container(
              height: 200,
              child: Center(
                child: Text('Henüz sensör verisi yok'),
              ),
            ),
          );
        }

        return Card(
          child: Container(
            height: 300,
            padding: EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Sıcaklık Geçmişi',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 10),
                Expanded(
                  child: charts.LineChart(
                    _createChartData(provider.sensorHistory),
                    animate: true,
                    behaviors: [
                      charts.ChartTitle(
                        'Zaman',
                        behaviorPosition: charts.BehaviorPosition.bottom,
                      ),
                      charts.ChartTitle(
                        'Sıcaklık (°C)',
                        behaviorPosition: charts.BehaviorPosition.start,
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  List<charts.Series<SensorDataPoint, int>> _createChartData(
      List<SensorData> sensorHistory) {
    
    List<SensorDataPoint> data = sensorHistory
        .asMap()
        .entries
        .map((entry) => SensorDataPoint(entry.key, entry.value.temperature))
        .toList();

    return [
      charts.Series<SensorDataPoint, int>(
        id: 'Temperature',
        colorFn: (_, __) => charts.MaterialPalette.blue.shadeDefault,
        domainFn: (SensorDataPoint point, _) => point.time,
        measureFn: (SensorDataPoint point, _) => point.temperature,
        data: data,
      ),
    ];
  }
}

class SensorDataPoint {
  final int time;
  final double temperature;

  SensorDataPoint(this.time, this.temperature);
}
```

## MQTT Entegrasyonu

```dart
// services/mqtt_service.dart
import 'dart:async';
import 'dart:convert';
import 'package:mqtt_client/mqtt_client.dart';
import 'package:mqtt_client/mqtt_server_client.dart';

class MqttService {
  static final MqttService _instance = MqttService._internal();
  factory MqttService() => _instance;
  MqttService._internal();

  MqttServerClient? _client;
  final StreamController<String> _messageController = 
      StreamController<String>.broadcast();

  Stream<String> get messageStream => _messageController.stream;

  Future<bool> connect(String server, String clientId) async {
    _client = MqttServerClient(server, clientId);
    _client!.port = 1883;
    _client!.keepAlivePeriod = 30;
    _client!.autoReconnect = true;

    try {
      await _client!.connect();
      
      _client!.updates!.listen((List<MqttReceivedMessage<MqttMessage>> messages) {
        final MqttPublishMessage message = messages[0].payload as MqttPublishMessage;
        final String payload = MqttPublishPayload.bytesToStringAsString(message.payload.message);
        _messageController.add(payload);
      });

      return true;
    } catch (e) {
      print('MQTT bağlantı hatası: $e');
      return false;
    }
  }

  void subscribe(String topic) {
    _client?.subscribe(topic, MqttQos.atMostOnce);
  }

  void publish(String topic, Map<String, dynamic> message) {
    if (_client?.connectionStatus?.state == MqttConnectionState.connected) {
      String jsonMessage = jsonEncode(message);
      final MqttClientPayloadBuilder builder = MqttClientPayloadBuilder();
      builder.addString(jsonMessage);
      _client!.publishMessage(topic, MqttQos.atMostOnce, builder.payload!);
    }
  }

  void disconnect() {
    _client?.disconnect();
  }

  bool get isConnected => 
      _client?.connectionStatus?.state == MqttConnectionState.connected;
}
```

## Sonuç

Flutter ve Dart ile IoT cihazları için güçlü mobil uygulamalar geliştirebilirsiniz. Bluetooth LE, WiFi ve MQTT protokolleri sayesinde ESP32 ve diğer mikrokontrolcülerle seamless iletişim kurabilir, kullanıcı dostu arayüzler oluşturabilirsiniz.

Bir sonraki yazımızda, LoRaWAN teknolojisi ve uzun mesafeli IoT ağları konularını detayıyla inceleyeceğiz.
