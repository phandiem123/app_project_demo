/* eslint-disable import/no-mutable-exports */
/* eslint-disable quotes */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
import {uuid} from 'uuid';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const USER = process.env.USER_EMAIL;
const PASS = process.env.PASS;

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: USER,
    pass: PASS,
  },
});

transporter.verify((success, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("ready for message");
    console.log(success);
  }
});
export default transporter;
