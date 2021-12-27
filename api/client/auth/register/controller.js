/* eslint-disable import/extensions */
// eslint-disable-next-line quotes
import creatNewUser from "./service.js";

// eslint-disable-next-line no-unused-vars
async function controller(res, req) {
  // eslint-disable-next-line prefer-const
  let message = await creatNewUser.creatNewUser(res.body);
  console.log(message);
}

export default {
  controller,
};
