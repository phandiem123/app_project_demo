/* eslint-disable import/extensions */
import passwordBcrypt from '../../../../utils/passwordBcrypt.js';
//import db from '../../../../models/index.js';
import numberOfRole from '../../../../constants/numberOfRole.js';
import messageResponeClient from '../../../../constants/messageResponeClient.js';

async function creatNewUser(data) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, rejct) => {
    // try {
    //   const hashPasswordBcrypt = await passwordBcrypt.hashPasswordToBcrypt(data.password);
    //   await db.user.creatNewUser({
    //     email: data.email,
    //     username: data.username,
    //     password: hashPasswordBcrypt,
    //     avartar: data.avartar,
    //     role: numberOfRole.numberRoleOfUser,
    //   });
    //   console.log('vào service');
    //   resolve(messageResponeClient.successRegister);
    //   // console.log(hashPasswordBcrypt);
    // } catch (error) {
    //   rejct(error);
    // }
  });
}

export default {
  creatNewUser,
};
