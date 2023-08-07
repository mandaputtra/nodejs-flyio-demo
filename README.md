# Fly Nodejs App

Below we will learn about how to deploy Node.js App on Fly IO. This will guide you on how to setup the deployment and CD

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
