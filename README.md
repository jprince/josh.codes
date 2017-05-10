# README

## Getting started
Install nvm if it's not already installed:
```sh
brew install nvm
```

Install v6.9.5 of nodejs:
```sh
nvm install 6.9.5
```

Use that version and start your server:
```sh
nvm use
./bin/server
```

That's it! The application is running on localhost:5000

## Configuring AWS elastic beanstalk
Before creating the elastic beanstalk instance, make sure that you've created an IAM user for the application, with only the necessary permissions. Generate access keys for that user and keep them handy, since you'll need them to create the instance.

Once you have your user and access keys, run:
```sh
$ brew update
$ brew install aws-elasticbeanstalk
$ eb init
```

Follow the series of prompts, which will configure your instance and SSH.

Run:
`$ eb create eb create production --database.engine postgres --database.instance db.t2.micro --database.username pguser --envvars SECRET_KEY_BASE=`

I found that I needed to explicitly assign environment variables in database.yml for the initial deploy, otherwise it failed because it couldn't connect to the postgres instance. After the initial deploy I was able to modify database.yml to once again use Rails secrets for those values.

## Deploying the application
`$ eb deploy`
