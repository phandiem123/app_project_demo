/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/Sequelize.js";

class Class extends Model {}

Class.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_student: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  cal_id: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  reg_id: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Class', // We need to choose the model name
});

// the defined model is the class itself
export default Class;
