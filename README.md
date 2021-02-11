# Mouse Events

Mouse events for Logitech Performance MX on a Raspberry Pi

### Confirm device connected:

```
cat /proc/bus/input/devices
```

Should return something similar to:

```
I: Bus=0003 Vendor=046d Product=101a Version=0111
N: Name="Logitech Performance MX"
P: Phys=usb-3f980000.usb-1.2/input2:1
S: Sysfs=/devices/platform/soc/3f980000.usb/usb1/1-1/1-1.2/1-1.2:1.2/0003:046D:C52B.0003/0003:046D:101A.0004/input/input9
U: Uniq=101a-47-ef-27-b0
H: Handlers=mouse0 event0
B: PROP=0
B: EV=17
B: KEY=ffff0000 0 0 0 0 0 0 0 0
B: REL=1943
B: MSC=10
```

### Raw 24 byte `input_event` contains 16 byte `timeval`

```
+                       16                      +  2  +  2  +     4     +
|          sec          +         µsec          |     |     |           |
+-----------------------------------------------------------------------+
| 0| 1| 2| 3| 4| 5| 6| 7| 8| 9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|
+-----------------------------------------------------------------------+
|                                               |     |     |           |
+                    timeval                    +type + code+    value  +
```

Unsigned 32-bit long time structure, `tssec` in seconds, and `tsusec` in microseconds.

### Notes

[Linus's event codes](https://github.com/torvalds/linux/blob/master/include/uapi/linux/input-event-codes.h)

[Linux Input event codes](https://www.kernel.org/doc/html/v4.18/input/event-codes.html#event-types)

[Working with /dev/input/eventX from Go](https://janczer.github.io/work-with-dev-input/)

### Solaar

For extra functionality, install [Solaar](https://pwr-solaar.github.io/Solaar/)

[Solaar github repo](https://github.com/pwr-Solaar/Solaar)

```
sudo apt-get install solaar

sudo solaar-cli show

// Unifying Receiver [/dev/hidraw0:F3259DD1] with 1 devices
// 1: Performance Mouse MX [Performance MX:47EF27B0]
```
