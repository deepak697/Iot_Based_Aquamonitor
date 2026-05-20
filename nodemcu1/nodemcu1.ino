
#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <OneWire.h>
#include <DallasTemperature.h>

// Wi-Fi credentials
const char* ssid = "Deepak’s iPhone";
const char* password = "76589871630";

// Static IP Configuration
IPAddress staticIP(192, 168, 1, 100); // Replace with your desired static IP
IPAddress gateway(172, 20, 10, 2);    // Replace with your network gateway
IPAddress subnet(255, 255, 255, 240);   // Replace with your subnet mask
IPAddress dns(192, 168, 1, 1);        // Replace with your preferred DNS

// Server setup
ESP8266WebServer server(80);

// Pin Definitions
#define SensorPin A0
#define ONE_WIRE_BUS D3  // Connect D3 (GPIO0) to the data pin of DS18B20

// Temperature Sensor Setup
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

// Sensor variables
float temperature = 0.0;
float pHValue;
const float VREF = 3.3;            // Reference voltage (depends on your board, typically 3.3V or 5V)
const int PH_SENSOR_PIN = A0;      // Analog pin connected to pH sensor
const float OFFSET = -2.0;         // Calibration offset (adjust after calibration)
const float PH_SCALING = 3.5;      // Scaling factor (adjust for accurate pH calculation)


void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);  // Set pin for LED if needed
  sensors.begin();
  
  // Set static IP configuration
  if (!WiFi.config(staticIP, gateway, subnet, dns)) {
    Serial.println("STA Failed to configure");
  }

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(5000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("WiFi connected");
  Serial.print("Static IP Address: ");
  Serial.println(WiFi.localIP());

  // Define server route
  server.on("/data", []() {
    String sensorData = "{\"temperature\": " + String(temperature) + ", \"pH\": " + String(pHValue) + "}";
    server.sendHeader("Access-Control-Allow-Origin", "*");  // Allow cross-origin requests
    server.send(200, "application/json", sensorData);
  });

  server.begin();
}

void loop() {
  server.handleClient();

  // Read temperature from DS18B20
  sensors.requestTemperatures();
  temperature = sensors.getTempCByIndex(0);

  int sensorValue = analogRead(PH_SENSOR_PIN);        // Read the analog value
  float voltage = sensorValue * VREF / 1023.0;       // Convert to voltage
  pHValue = PH_SCALING * voltage + OFFSET;     // Calculate pH using calibration

  // Log data to Serial Monitor
  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C, pH: ");
  Serial.println(pHValue);

  // Delay for readability
  delay(1000);
}
