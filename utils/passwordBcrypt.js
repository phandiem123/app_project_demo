import bcryptjs from 'bcryptjs';

const salt = bcryptjs.genSaltSync(10);

function hashPasswordToBcrypt(password) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcryptjs.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
}
export default {
  hashPasswordToBcrypt,
};
