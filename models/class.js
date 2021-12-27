/* eslint-disable import/newline-after-import */
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class Class extends Model {}

Class.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total_students: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  id_registration: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Class', // We need to choose the model name
  tableName: 'classes',
});

// the defined model is the class itself
export default Class;
