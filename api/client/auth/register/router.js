/* eslint-disable import/extensions */
import express from 'express';
import clientRegisterController from './controller.js';

const router = express.Router();

router.get('/');
router.post('/', clientRegisterController.controller);
export default {
  router,
};
