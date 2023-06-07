# Scaffold-ETH  

## Purge cache and reinstall node_modules

 From your repo, run this command:

```bash
rm -rf node_modules && rm -rf packages/hardhat/node_modules && rm -rf packages/react-app/node_modules 
rm yarn.lock && rm -rf packages/hardhat/artifacts && rm -rf packages/hardhat/cache
yarn cache clean
yarn install
```

## When first git cloning scaffold-eth main repo:

### ERR_OSSL_EVP_UNSUPPORTED

1. Run 
```bash
grep -r -e "--openssl-legacy-provider" .
``` 
2. Remove each `--openssl-legacy-provider` you find with that command, try to run `yarn start` without that argument
3. If it doesn't run either, run `export NODE_OPTIONS=--openssl-legacy-provider`, and then run again the command you were trying to run.

Sources: [(Stack Overflow 1)](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported) [(Stack Overflow 2)](https://stackoverflow.com/questions/70582072/npm-run-fails-with-err-ossl-evp-unsupported) 

**Attempt of solving it with a single command (Don't run this command)**
```bash
find . -type f -exec sed -i 's/--openssl-legacy-provider //g' {} +
```

## Deploying to production

## Liberating a specific port (careful!)

1. Search what apps are using a specific port 
(In this case, the port number is 3000)
```bash
sudo lsof -i :3000 
```
2. Take note of the PID (Process ID), and kill it
(In this case, the PID is 798035)
```bash
kill 798035
```


