# README

## Getting started
Install nvm if it's not already installed:
```sh
brew install nvm
```

Install v8.9.3 of nodejs:
```sh
nvm install 8.9.3
```

Use that version:
```sh
nvm use
```

Install dependencies:
```sh
npm install
```

Start your server:
```sh
gatsby develop
```

That's it! The application is running on localhost:8000

## Deploying to production
Prepare an optimized production build:
```sh
gatsby build
```

Test the production build locally:
```sh
gatsby serve
```
