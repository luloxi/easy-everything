# Yarn

Here's a step-by-step guide to uninstall Node.js (if necessary), install the latest Node.js LTS version, and then install Yarn on your Linux system.

## Step 1: Uninstall Node.js

First, check if Node.js is installed and then uninstall it.

Check Node.js version (if installed):

```bash
node -v
```

If installed via a package manager (like apt, yum, or dnf), you can remove it with:

```bash
sudo apt remove nodejs npm   # For Debian/Ubuntu-based systems
sudo yum remove nodejs       # For RHEL/Fedora/CentOS-based systems
sudo dnf remove nodejs       # For newer Fedora versions
```

If installed via Node Version Manager (NVM), use the following:

```bash
nvm uninstall <version>   # Example: nvm uninstall 16
```

## Step 2: Install Latest LTS Version of Node.js

To install the latest LTS version of Node.js, the best approach is to use Node Version Manager (NVM), which allows you to easily manage multiple Node.js versions.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc    # Or ~/.zshrc for zsh users
nvm install --lts
nvm use --lts
nvm alias default lts/*    # Makes the LTS version the default
```

Verify Node.js installation:

```bash
node -v    # Should display the latest LTS version
npm -v     # Should display the version of npm that comes with Node.js
```

## Step 3: Install Yarn

Now that Node.js is installed, let's install Yarn, a popular package manager for Node.js.

```bash
sudo npm install --global yarn
```

Verify Yarn installation:

```bash
yarn -v    # Should display the installed version of Yarn
```

## Summary of Commands:

```bash
# Uninstall Node.js
sudo apt remove nodejs npm        # Debian/Ubuntu (adjust for other distros)
# OR
nvm uninstall <version>           # If installed via NVM

# Install NVM (if needed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc                  # Or ~/.zshrc depending on your shell

# Install the latest LTS version of Node.js
nvm install --lts
nvm use --lts
nvm alias default lts/*

# Install Yarn
sudo npm install --global yarn

```

Now, Node.js LTS and Yarn should be installed and ready to use.

## Debugging

### Enable Yarn

1. Run `corepack enable`. If it's not available, run `npm i -g corepack` first.
2. Check if it's installed with `yarn --version`

