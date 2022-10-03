# How to start a new project on hardhat

1. Create folder and install Hardhat running:
   `yarn add --dev hardhat`

2. Create an empty hardhat-config.js:
   `yarn hardhat`

3. Add config or copy-paste it from previous project
   Sample config: https://github.com/PatrickAlphaC/hardhat-defi-fcc/blob/main/hardhat.config.js

4. Install dependencies
   `yarn add --dev @nomiclabs/hardhat-ethers@npm:hardhat-deploy-ethers ethers @nomiclabs/hardhat-etherscan @nomiclabs/hardhat-waffle chai ethereum-waffle hardhat hardhat-contract-sizer hardhat-deploy hardhat-gas-reporter prettier prettier-plugin-solidity solhint solidity-coverage dotenv`

5. Create (or copy-paste) .env file

6. Create folders:

- `contracts` for storing `.sol` files.
- `scripts` to store scripts
- `deploy` to store deploy scripts
- `test` to store test scripts

## Interfaces

1. Store interface file/s on `contracts/interfaces`
   (If an interface you copy requires libraries from chainlink, aave, openzeppelin, you can add them to the project by entering `yarn add --dev @aave/protocol-v2` and then replacing the `import` starting from `@aave/protocol-v2/contracts/*`)

2. After storing an interface or contract, run `yarn hardhat compile` to get the ABI.

3. To use an interface to interact with a contract that's already deployed, see `interface.js` for further instructions

4. After creating the script, run it with `takeAction.js` by running `yarn hardhat scripts/takeAction.js`

# Upload project to GitHub

1. Do NOT forget to create a `.gitignore` file and list there all files containing sensitive data, like `.env`. Also, list all the unnecesary files that you can download with `yarn` or `yarn hardhat compile`.

It may look like this:
`node_modules .env artifacts cache ...`

2. Initialize git on the root directory with `git init`

3. Create a new repository on github and run the command `git remote add origin (YOUR_REPO_URL)`

4. Change the branch to main with `git branch -M main`
   (git uses "master" as default, mmm yeah Mommy ;) )

5. Stage and commit the files for your first commit with `git add .` then `git commit -m "First commit"`

6. Push them to GitHub with `git push -u origin main`

# Setting the environment

- Install Visual Studio Code: https://code.visualstudio.com/
- Install Node Js: https://nodejs.org/en/download/
- Install Git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Windows only

## Install WSL (Windows Subsystem for Linux)

1. Type `powershell` on Start Menu, Right-click then "execute as Administrator", then run `wsl --install`.
2. Restart computer after installation completes.
3. Set user and password for your Ubuntu installation after you restart. If it doesn't prompt automatically after restart, type `ubuntu` on Start Menu and run it.
4. Open VS Code and install the extension **Remote Development**

## Use WSL on Windows

- On VS Code, press **Ctrl + Shift + P**, type `wsl` then click **Remote-WSL: New WSL Window** to open a Linux terminal.
- Type `ubuntu` on Start Menu, run it, then type `mkdir FOLDER_NAME` to create a new folder, `cd FOLDER_NAME` to move into that folder, and `code .` to run VS Code from that folder.
