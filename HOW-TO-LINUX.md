# Linux

## Install, Uninstall

Different ways of using a Linux environment if you have a Windows PC

If you install it, **you can remove it completely anytime**
(but pay attention, you don't want to erase your hard drive,)

1.  [WSL (Very easy)](#install-wsl-windows-subsystem-for-linux)
2.  [Virtualization (Easy)](#virtualization)
3.  [Booting from USB (Medium)](#booting-from-usb)
4.  [Installing Linux (Hard)](#installing-linux)
5.  [Uninstall Linux (Easy)](#uni)

### Install WSL (Windows Subsystem for Linux)

1. Open start menu, type `powershell` and right-click the main result, Run as Administrator, then run `wsl --install`.
2. Restart computer after installation completes.
3. Set user and password for your Ubuntu installation after you restart. If it doesn't prompt automatically after restart, type `ubuntu` on Start Menu and run it.
4. Open VS Code and install the extension **Remote Development**

#### Open a WSL terminal

1. Open start menu, type `ubuntu` and press ENTER

#### First steps on WSL terminal

1. Type and enter `mkdir FOLDER_NAME` to create a new folder
2. Type and enter `cd FOLDER_NAME` to move into that **FOLDER_NAME**
3. Type and enter `code .` to run VS Code from that folder.
4. Type and enter `cd ..` to move into the parent folder of **FOLDER_NAME**

## Virtualization

Download Virtualbox, download an image/installer, add it to virtualbox.

## Booting from USB

1. Go to Linux Mint website and download latest stable version
2. Burn into a USB stick
3. Boot from USB stick (config BIOS)

## Installing Linux

### Downloading and installing

1. Go to Linux Mint website and download latest stable version
2. Burn into a USB stick
3. Boot from USB stick (config BIOS)
4. Install auto-partitioning the disk

### Making Windows the default OS at boot

To run Windows by default when you first start your computer

**FROM THE LINUX ENVIRONMENT**

1. Open a terminal
2. Run this commands (press ENTER to continue):

```bash
sudo add-apt-repository ppa:danielrichter2007/grub-customizer
sudo apt-get update
sudo apt-get install grub-customizer
grub-customizer
```

3. Go to the end of that list, and select the "Windows" option
4. Do clicks to the up arrow until it's at the top of the list
5. Save and exit

### Uninstall Linux

Remove Linux from your computer and reclaim the disk space

**FROM THE WINDOWS ENVIRONMENT**

1. [Download MiniTool Partition Wizard Free](https://www.partitionwizard.com/download-free-from-cnet.html?p=pw&e=pw-free&r=www.partitionwizard.com/) and install it
2. Select the partitions corresponding to Linux, delete them, then resize your windows partition, and apply changes.

