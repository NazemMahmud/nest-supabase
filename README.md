## Description

This is just a sample how to connect NestJs with Supabase. Here, 3 relations are used:
- users
- posts
- comments

The relations between them
* User can create multiple posts
* 1 posts can have multiple comments

## Todo

So, still here so many things are not included. I will add them time to time
- **DTO**, for all CRUD operation
- **.env** file
- **Request data validation**
- **Common response** for both error and success 

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```