# Scaffold-ETH  

## Cleaning node_modules and cache

1. Remove node_modules: From the root folder of the repo, run this command:

```bash
rm -rf node_modules && rm -rf packages/hardhat/node_modules && rm -rf packages/react-app/node_modules
```

2. Purge cache: Run the following command to purge the cache of `yarn`:

```bash
yarn cache clean
```

3. Install dependencies: Navigate to the `/packages/react-app/` folder and run the following command to install the necessary dependencies:

```bash
yarn install
```

## ERR_OSSL_EVP_UNSUPPORTED

[Solved here](https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported)