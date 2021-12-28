/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable import/newline-after-import */
import { DataTypes, Model } from 'sequelize';
import sequelize from "../config/Sequelize.js";

class UserVerify extends Model {}
UserVerify.init({
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
  verify: {
    type: DataTypes.BOOLEAN,
    // allowNull defaults to true
  },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'UserVerify', // We need to choose the model name
});
//console.log(User.findAll(), "aaaaaaaaaaaaaaaaaaaaaaaaa");
// the defined model is the class itself
export default UserVerify;
