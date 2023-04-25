# VS Code

## VS Code with auto formatting (JavaScript and Solidity)

1. Install VS Code from here: https://code.visualstudio.com/
1. On VS Code, install the extensions **Solidity + Hardhat** and **Prettier**
1. **Ctrl + Shift + P**, then `Preferences: Open User Settings (JSON)`
1. Add the lines: `"editor.formatOnSave": true, "[solidity]": { "editor.defaultFormatter": "NomicFoundation.hardhat-solidity" }, "[javascript]": { "editor.defaultFormatter": "esbenp.prettier-vscode" },`

## Set WSL as default on VS Code

If you [installed WSL](./HOW-TO-LINUX.md#install-wsl-windows-subsystem-for-linux) and you want to make it the default terminal on VS Code

1. Open a terminal on VS Code
2. Click on the "Select Default Shell" button in the terminal toolbar
3. Select `WSL Bash`
4. (Optional) Optionally, you can also set the default terminal by adding the following configuration in your VS Code settings (File > Preferences > Settings):
   `"terminal.integrated.defaultProfile.windows": "WSL",`
5. Close that terminal and open a new one