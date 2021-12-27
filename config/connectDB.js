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
async function connectDB(){
  try {
    //let s = await sequelize.query('SELECT * FROM classes');
    //console.log(s);
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
export default {
  connectDB,
};
