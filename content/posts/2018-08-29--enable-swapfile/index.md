---
title: How to enable swapfile
subTitle: Swap partition seems to be deprecating.
category: "linux"
---

Please keep in mind that your swapfile size should be equal to your `RAM` amount.
You can check your ram size by running `free -m`.

In this example we set a `2GB swapfile`.

```
sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048
sudo chown root:root /mnt/swapfile
sudo chmod 600 /mnt/swapfile
sudo mkswap /mnt/swapfile
sudo swapon /mnt/swapfile
echo "/mnt/swapfile swap swap defaults 0 0" | sudo tee -a /etc/fstab
swapon -a
```
