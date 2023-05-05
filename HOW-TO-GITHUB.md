# Github

## Set default username and email in Git:

`git config --global user.name "Your Name"`
`git config --global user.email "youremail@yourdomain.com"`

Verify it has been configured correctly: `git config --list`

Link: https://linuxize.com/post/how-to-configure-git-username-and-email/

## Install GitHub auth tool:

```bash
type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

### Login to GitHub:

```bash
gh auth login
```

Link: https://github.com/cli/cli/blob/trunk/docs/install_linux.md

## Upload project to GitHub

> **DO NOT FORGET TO CREATE A `.gitignore`** file and list there all files containing sensitive data, like `.env`. Also, list all the unnecesary files that you can download with `yarn` or `yarn hardhat compile`.

-   [USE GITHUB DESKTOP BECAUSE IT'S EASIER (WINDOWS AND MAC)](https://desktop.github.com/)
-   [USE GITHUB DESKTOP EVEN IF YOU'RE ON LINUX](https://github.com/muroko/github-desktop-linux)
-   (This might be a bit more trickier to install, but if you're using Linux, you probably like doing so anyways)

### Otherwhise...

It may look like this:
`node_modules .env artifacts cache ...`

2. Initialize git on the root directory with `git init`
3. Create a new repository on github and run the command `git remote add origin (YOUR_REPO_URL)`
4. Change the branch to main\* with `git branch -M main`
5. Stage and commit the files for your first commit with `git add .` then `git commit -m "First commit"`
6. Push them to GitHub with `git push -u origin main`

\* Set as default with `git config --global init.defaultBranch main`

## Install Git on WSL

If you [installed WSL](./HOW-TO-LINUX.md#install-wsl-windows-subsystem-for-linux) and you want to use git with it

1. Check if it's already installed with `git --version`
2. If not, install Git following the instructions for Linux here https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

## Add GPG keys 

**Link**: https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key
