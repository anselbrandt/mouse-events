# Bluetooth Numeric Keypad

config files in /etc/bluetooth/

### Confirm Bluetooth Running

sudo service bluetooth status

If not:

sudo service bluetooth start

### Bluetoothctl

sudo bluetoothctl

power on

agent on

scan on

pair [device_id]

trust [device_id]

connect [device_id]

### Confirm Device Added to `/dev/input/`
