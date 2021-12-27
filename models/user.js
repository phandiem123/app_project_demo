/* eslint-disable import/newline-after-import */
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
  // Model attributes are defined here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  password: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  avartar: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  role: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users',
});

// the defined model is the class itself
export default {
  User,
};
