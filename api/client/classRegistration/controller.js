/* eslint-disable import/extensions */
/* eslint-disable quotes */
import listClass from "./service.js";

// eslint-disable-next-line no-unused-vars
async function controller(res, req) {
  // eslint-disable-next-line prefer-const
  listClass.findAllClass();
}

export default {
  controller,
};
