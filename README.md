# Fly Nodejs App

Below we will learn about how to deploy Node.js App on Fly IO. This will guide you on how to setup the deployment and CD. Since you clone this repo from github please delete the `.git` folder to reset the git repositories to your own

## Step By Step Deployment and Continous Deployment using Github Actions

### Install `flyctl`

Please follow [this guide](https://fly.io/docs/hands-on/install-flyctl/)

### Login to Fly.IO

On terminal log in to fly.

```sh
$ fly auth login
```

### Deploy our apps!

On terminal deploy our fly apps

```sh
$ fly launch
```

Wait till the command finish and make sure there are no errors. Run command to deploy our apps

```sh
$ fly deploy
```

### Enabling Github Actions for Continous Deployment

First of all setup the GitHub repository, create new github repository. Just create empty repositories. After that make our local repository pointed to our github repo : 

```bash
$ git init # initialize repository
$ git add . # add unstaged file on this folder
$ git commit -m "initialize" # our first commit history
$ git remote add origin <your-repo-git-location>
$ git push --set-upstream origin main
```

### Create Github Actions

Create file and folders `.github/workflows/fly.yml`. Github will read those
folders as special folders.

Insert it with this

```yaml
name: Fly Deploy
on:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy app
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: flyctl deploy --remote-only
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

### Create Fly.IO API tokens

This tokens are used to acessing Fly.io deployment infrastructure via Github
Actions. To generate the tokens

```sh
$ fly tokens create deploy -x 999999h
```

This will create the tokens for deployment in witch will expired after
`999999 hour` (I dont know when).

### Save the Fly.IO tokens to Github Variables

After you got the tokens copy those tokens and then place it on your Github repository. To do that Go to *Your Repo* > *Settings* > *Secret and Variables* > *Actions*. You'll see the "New Repository Secret" button.

Click on that button and name your secret key `FLY_API_TOKEN`.

### Test your apps!

Change something and push it on github!
