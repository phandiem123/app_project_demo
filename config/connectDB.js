/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable space-before-blocks */
import sequelize from "./Sequelize.js";

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
