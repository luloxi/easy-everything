# Scaffold-ETH  

## ERR_OSSL_EVP_UNSUPPORTED

Run this command (BETA)
```bash
find . -type f -exec sed -i 's/--openssl-legacy-provider//g' {} +
```

Alternatively:
1. Run 
```bash
grep -r -e "--openssl-legacy-provider" .
``` 
2. Remove each `--openssl-legacy-provider` you find with that command
3. Run the command again to make sure you removed them all [( Stack Overflow)](https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported) 

## Purge cache and reinstall node_modules

 From your repo, run this command:

```bash
rm -rf node_modules && rm -rf packages/hardhat/node_modules && rm -rf packages/react-app/node_modules && rm yarn.lock
yarn cache clean
yarn install
```