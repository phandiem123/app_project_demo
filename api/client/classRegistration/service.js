/* eslint-disable prefer-const */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
import Class from '../../../models/class.js';
import db from '../../../models/index.js';
import sequelize from 'sequelize';

async function findAllClass() {
  try {
    console.log("aaaaaaaaaaaaaaaa");
    // let a = await db.sequelize.query('SELECT * FROM users');
    // console.log(a);
    let data = await Class.findAll();
    console.log(data, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  } catch (error) {
    console.log(error);
  }
}
export default {
  findAllClass,
};
