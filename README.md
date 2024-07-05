#RFID card project
## pi RFID service
sudo systemctl status rfid.card.reader.service

## service file
nano /lib/systemd/system/rfid.card.reader.service

## RFID reader
/home/pi/python-stuff/others/rfid/Read.py

## check pi wifi
sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
