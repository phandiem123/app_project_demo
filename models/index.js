import Sequelize from 'sequelize';
import dotenv from 'dotenv';

const db = {};
dotenv.config();

const database = process.env.NAME_DATABASE;
const username = process.env.USERNAME_SQL;
const password = process.env.PASSWORD_SQL;
const host = process.env.HOST;
const dialect = process.env.DIALECT;
const sequelize = new Sequelize(database, username, password, {
  // eslint-disable-next-line object-shorthand
  host: host,
  // eslint-disable-next-line object-shorthand
  dialect: dialect,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
