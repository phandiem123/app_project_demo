// import dotenv from 'dotenv';
// 'use strict';

// //dotenv.config();

// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';

// import { fileURLToPath } from 'url';
// import  { dirname } from 'path';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// import config from '../config/config.json';
// config[env];
// const db = {};

// console.log(env);

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   //sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     // const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     // db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;

/* eslint-disable no-console */
/* eslint-disable space-before-blocks */
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = process.env.NAME_DATABASE;
const username = process.env.USERNAME_SQL;
const password = process.env.PASSWORD_SQL;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
// eslint-disable-next-line spaced-comment
//console.log (database, username, password, host, dialect);

const sequelize = new Sequelize(database, username, password, {
  // eslint-disable-next-line object-shorthand
  host: host,
  // eslint-disable-next-line object-shorthand
  dialect: dialect,
});
// eslint-disable-next-line space-before-blocks

// const sequelize = new Sequelize('app_project_demo', 'diem', '123456789', {
//   host: host,
//   dialect: dialect, // pick one of 'mysql','sqlite','postgres','mssql',
// });
console.log("hihiihhihh");
async function connectDB(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default {
  connectDB,
};
