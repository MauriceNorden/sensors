import urequests as requests
from machine import ADC, Pin
import network
import sys
import time
API_URL = "http://192.168.0.100:5000/v1/logdoordata"
WIFI_SSID = "DikkeBende"
WIFI_PASSWORD = "1234567890"
adc = ADC(Pin(26))

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect(WIFI_SSID, WIFI_PASSWORD)
    
    
    
def get_mac_address():
    wlan = network.WLAN(network.STA_IF)  # Create WLAN object for the station interface
    mac_address = ':'.join('%02x' % b for b in wlan.config('mac'))  # Retrieve the MAC address
    return mac_address

mac_address = get_mac_address()

    
    
while True:
    try:
        time.sleep_ms(5000)
        voltage = adc.read_u16() * 3.3 / 65535
        distance = 13 * pow(voltage, -1)
        data = {
        "value": distance,
        "uid": mac_address,
        "type": 1
        }
        response = requests.post(API_URL, json=data, headers={'Cache-Control': 'no-cache'})
        response.close()
        print("API Response:", response.status_code)
        
    except Exception as exc:
        machine.reset()    





    




