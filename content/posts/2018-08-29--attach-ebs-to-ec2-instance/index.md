---
title: "Attach a EBS disk to a EC2 instance"
subTitle: "Without rebooting the server"
category: 'linux'
cover: ec2.png
---

```
lsblk

sudo file -s /dev/xvdb
sudo mkfs -t ext4 /dev/xvdb

# Get device id
ls -lah /dev/disk/by-uuid/

# Add to /etc/fstab
UUID=copyuidhere       /home/web/public_html   ext4    defaults,nofail        0       2

cd /home/web
chown www-data:www-data public_html
```