# Setting up the environmen

## Install Node Js

1. Install Node Version Manager by opening a terminal and running `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
2. **Close the terminal**, then open a new one, and run `nvm --version` to see if Node Version Manager actually installed.
3. Run `nvm install 16.14.2` to install Node Js.
4. Run `node --version` to see if Node Js installed.

### Enable Yarn (Node Js required)

1. Run `corepack enable`. If it's not available, run `npm i -g corepack` first.
2. Check if it's installed with `yarn --version`

## Enable hh shorthand

`npm install --global hardhat-shorthand` to use commands like `hh compile` instead of `yarn hardhat compile`

## Search for a specific line on a folder

`grep -r -e "a specificline" /path/to/folder`