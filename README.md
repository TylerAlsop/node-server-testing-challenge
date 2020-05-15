# Server Testing

## Topics

- automated testing.
- jest testing framework.
- supertest module.

## Assignment

For this project you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Download Project and Install Dependencies

- fork and clone this repository.
- **CD into the folder** where you downloaded the repository.
- run `npm i` to download all dependencies.
- type `npm test` to run the tests.

## Requirements

- use `jest` and `supertest` to write the tests.
- Your API must be able to **create** and **delete** a _resource_ of your choosing.
- Write a minimum of two tests per route handler.


## Notes for installing dependencies:
npm init -y
npm install --save-dev nodemon
npm install knex --save sqlite3
npx knex init
npm install express
npm install helmet
npx knex migrate:make initial
npm install bcryptjs
npm install express-session
npm install cors
npm install jsonwebtoken
npm install -D dotenv
****** Be sure and add .env to the gitignore ******
npm install cookie-parser