import express from 'express';
import { getAllFoods, addNewFood } from '../controllers/menuapp-api-controller.js';

const router = express.Router();

router.route('/menu')
.get(getAllFoods)
.post(addNewFood);

export default router;