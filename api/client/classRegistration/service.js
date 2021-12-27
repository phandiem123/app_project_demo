/* eslint-disable prefer-const */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
import Class from '../../../models/class.js';
import sequelize from 'sequelize';
console.log(sequelize.Model)

async function findAllClass() {
  try {

    let a = await sequelize.query('SELECT * FROM classes');
    console.log(a);
    // let data =await Class.findOne({

    // });
    // console.log(data,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  } catch (error) {
    console.log(error);
  }
}
export default {
  findAllClass,
};
