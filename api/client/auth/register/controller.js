/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
// eslint-disable-next-line quotes
import service from "./service.js";
import responeClient from '../../../../utils/responeClient.js';

// eslint-disable-next-line no-unused-vars
async function controller(res, req) {
  // eslint-disable-next-line prefer-const
  let emailReceive = res.body.email;
  let d = service.getUserByEmail(emailReceive);
  //console.log(d.then(data => console.log(data)));
  //d.then(data => console.log(data[0].id));
  //let message = await service.creatNewUser(res.body, res);
 // responeClient("data", message, res);
}

export default {
  controller,
};
