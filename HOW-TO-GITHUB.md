### Install Git on WSL

1. Check if it's already installed with `git --version`
2. If not, install Git following the instructions for Linux here https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

# Upload project to GitHub

-   [USE GITHUB DESKTOP BECAUSE IT'S EASIER (WINDOWS AND MAC)](https://desktop.github.com/)
-   [USE GITHUB DESKTOP EVEN IF YOU'RE ON LINUX](https://github.com/muroko/github-desktop-linux)
-   (This might be a bit more trickier to install, but if you're using Linux, you probably like doing so anyways)

## Otherwhise...

1. **DO NOT FORGET TO CREATE A `.gitignore`** file and list there all files containing sensitive data, like `.env`. Also, list all the unnecesary files that you can download with `yarn` or `yarn hardhat compile`.

It may look like this:
`node_modules .env artifacts cache ...`

2. Initialize git on the root directory with `git init`
3. Create a new repository on github and run the command `git remote add origin (YOUR_REPO_URL)`
4. Change the branch to main\* with `git branch -M main`
5. Stage and commit the files for your first commit with `git add .` then `git commit -m "First commit"`
6. Push them to GitHub with `git push -u origin main`

\* Set as default with `git config --global init.defaultBranch main`
