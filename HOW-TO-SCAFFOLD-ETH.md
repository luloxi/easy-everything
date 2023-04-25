# Scaffold-ETH  

## ERR_OSSL_EVP_UNSUPPORTED

1. Run 
```bash
grep -r -e "--openssl-legacy-provider" .
``` 
2. Remove each `--openssl-legacy-provider` you find with that command, and add `export NODE_OPTIONS=--openssl-legacy-provider` at the beginning of that command

Sources: [(Stack Overflow 1)](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported) [(Stack Overflow 2)](https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported) 

**Attempt of solving it with a single command (Don't run this command)**
```bash
find . -type f -exec sed -i 's/--openssl-legacy-provider //g' {} +
```

## Purge cache and reinstall node_modules

 From your repo, run this command:

```bash
rm -rf node_modules && rm -rf packages/hardhat/node_modules && rm -rf packages/react-app/node_modules && rm yarn.lock
yarn cache clean
yarn install
```