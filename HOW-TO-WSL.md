# WSL (Windows Subsystem for Linux)

## Installing WSL

0. Enable virtualization in your computer's BIOS settings (check the internet on how to do it on your specific computer model).

1. Open start menu, type `powershell` and right-click the main result, Run as Administrator, then run `wsl --install`.
2. Restart computer after installation completes.
3. Set user and password for your Ubuntu installation after you restart. If it doesn't prompt automatically after restart, type `ubuntu` on Start Menu and run it.
4. Open VS Code and install the extension **Remote Development**

### Opening a WSL terminal

1. Open start menu, type `ubuntu` and press ENTER

### First steps on WSL terminal

1. Type and enter `mkdir FOLDER_NAME` to create a new folder
2. Type and enter `cd FOLDER_NAME` to move into that **FOLDER_NAME**
3. Type and enter `code .` to run VS Code from that folder.
4. Type and enter `cd ..` to move into the parent folder of **FOLDER_NAME**

## Setting WSL as default on VS Code

If you [installed WSL](./HOW-TO-LINUX.md#install-wsl-windows-subsystem-for-linux) and you want to make it the default terminal on VS Code

1. Open a terminal on VS Code
2. Click on the "Select Default Shell" button in the terminal toolbar
3. Select `WSL Bash`
4. (Optional) Optionally, you can also set the default terminal by adding the following configuration in your VS Code settings (File > Preferences > Settings):
   `"terminal.integrated.defaultProfile.windows": "WSL",`
5. Close that terminal and open a new one

## Install Git on WSL

1. Check if it's already installed with `git --version`
2. If not, install Git following the instructions for Linux here https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

### Use Microsoft Store Terminal for multi terminal and nicer use

Explanation here