# Yarn

To install Yarn, we need to install Node first.

## Quickstart

1. Install the [LTS version of Node](https://nodejs.org/en/download/)
2. Open a terminal and run `npm install --global yarn`

You can also install Node with the following alternatives:

### Single command install to latest LTS version (Linux/WSL only)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 4 step easy install (Linux/WSL only)

1. Install Node Version Manager by opening a terminal and running `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
2. **Close the terminal**, then open a new one, and run `nvm --version` to see if Node Version Manager actually installed.
3. Run `nvm install 18.16.0` to install Node Js.
4. Run `node --version` to see if Node Js installed.

## Debugging

### Enable Yarn

1. Run `corepack enable`. If it's not available, run `npm i -g corepack` first.
2. Check if it's installed with `yarn --version`

