# How to start a new project on hardhat

0. (optional) To add info about the project, run `yarn init` first

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
- `scripts` to store scripts that run contracts methods
- `deploy` to store deploy scripts
- `test` to store test scripts
- `utils` to store utility contracts

## Interfaces

1. Store interface file/s on `contracts/interfaces`
   (If an interface you copy requires libraries from chainlink, aave, openzeppelin, you can add them to the project by entering `yarn add --dev @aave/protocol-v2` and then replacing the `import` starting from `@aave/protocol-v2/contracts/*`)

2. After storing an interface or contract, run `yarn hardhat compile` to get the ABI.

3. To use an interface to interact with a contract that's already deployed, see `interface.js` for further instructions

4. After creating the script, run it with `takeAction.js` by running `yarn hardhat scripts/takeAction.js`