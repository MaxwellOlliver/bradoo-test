## bradoo test
  
![Design Pattern](https://img.shields.io/badge/Backend_Design_Pattern-SOLID-success?style=flat)
![Node](https://img.shields.io/badge/Node-v14.8.0-success?style=flat)
![npm](https://img.shields.io/badge/npm-v6.14.7-success?style=flat)
![Express](https://img.shields.io/badge/Express-v4.17.1-success?style=flat)
![Typescript](https://img.shields.io/badge/Typescript-v4.0.3-success?style=flat)
![Sequelize](https://img.shields.io/badge/Sequelize-v6.3.5-success?style=flat)
![React](https://img.shields.io/badge/React-v17.0.1-success?style=flat)

This is a simple project performing a data flow between Vendor and Products (CRUD).

--------

Follow the instructions below to run the project correctly:

We need to run backend first. Som, lets do it.

Open the terminal in the backend folder and run the following command to install all dependecies:

```node
npm install
```

Change the /src/config/database.ts file to your settings. Example:

```ts
export default {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'foo',
  database: 'foo',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

After configuring the database, now we can run sequelize migrations. Run the following command on terminal to apply the migrations:

```node
npx sequelize db:migrate
```

Now we can start the backend with the command ```npm start```.

------

With the backend running, let's start the frontend.

Go to frontend folder on terminal and run ```npm install```to install all dependencies.


when finished to install all dependencies, run ```npm start``` to start the project at [localhost:3000](http://localhost:3000).
