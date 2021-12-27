/* eslint-disable import/extensions */
import express from 'express';
import listClassController from './controller.js';

const router = express.Router();

router.get('/');
router.post('/', listClassController.controller);
export default {
  router,
};
