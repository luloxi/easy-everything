# Scaffold-ETH  

## Purge cache and reinstall node_modules

 From your repo, run this command:

```bash
rm -rf node_modules && rm -rf packages/hardhat/node_modules && rm -rf packages/react-app/node_modules
yarn cache clean
yarn install
```

## ERR_OSSL_EVP_UNSUPPORTED

1. Run `grep -r -e "--openssl-legacy-provider" .` and remove that line wherever it appears on the repo (this could be done with a single command) [( Stack Overflow)](https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported) 

