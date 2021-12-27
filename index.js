/* eslint-disable import/no-unresolved */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
// eslint-disable-next-line import/no-extraneous-dependencies
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import appRoot from 'app-root-path';
import cookieParser from 'cookie-parser';
import clientAuthRegisterRouter from './api/client/auth/register/router.js';
import clientListClassRouter from './api/client/classRegistration/router.js';
// eslint-disable-next-line import/newline-after-import
import connectDB from './config/connectDB.js';

const app = express();
dotenv.config();

// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line no-underscore-dangle
const __dirname = dirname(__filename);
const publicDirectory = path.join(__dirname, './public');
app.use('/css', express.static(`${__dirname}/tẹmplates`));
app.use(express.static(publicDirectory));

app.set('view engine', 'ejs');
app.set('views', `${appRoot}/first_app_calendar/views/auth/`);
app.use(cookieParser('NotSoSecret'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

connectDB.connectDB();

app.use('/client/auth/register', clientAuthRegisterRouter.router);
app.use('/client/classRegistration/listClass', clientListClassRouter.router);
// eslint-disable-next-line prefer-destructuring
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server up ', PORT);
});
