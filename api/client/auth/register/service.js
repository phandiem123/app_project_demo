/* eslint-disable no-useless-catch */
/* eslint-disable object-shorthand */
/* eslint-disable key-spacing */
/* eslint-disable no-async-promise-executor */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
import passwordBcrypt from '../../../../utils/passwordBcrypt.js';
import numberOfRole from '../../../../constants/numberOfRole.js';
import messageResponeClient from '../../../../constants/messageResponeClient.js';
import User from '../../../../models/user.js';
import responeClient from '../../../../utils/responeClient.js';
async function getUserByEmail(email, res) {
  let data;
  try {
    data = await User.findAll({
      where: {
        email: email,
      },
      raw: true,
    });
    if (data.length < 1) {
      responeClient(null, messageResponeClient.nullData, res);
    }
    return data;
  } catch (error) {
    throw error;
  }
}
async function creatNewUser(data, res) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, rejct) => {
    try {
      const hashPasswordBcrypt = await passwordBcrypt.hashPasswordToBcrypt(data.password);
      if (!data.email || !data.password) {
        responeClient(null, messageResponeClient.againRetype, res);
      } else {
        User.create({
          email: data.email,
          username: data.username,
          password: hashPasswordBcrypt,
          avartar: data.avartar,
          role: numberOfRole.numberRoleOfUser,
        });
      }
      resolve(messageResponeClient.successRegister);
    } catch (error) {
      rejct(error);
    }
  });
}

export default {
  getUserByEmail,
  creatNewUser,
};
