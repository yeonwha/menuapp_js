import express from 'express';
import { getAllFoods, addNewFood, editPrice } from '../controllers/menuapp-api-controller.js';

const router = express.Router();

router.route('/menu')
.get(getAllFoods)
.post(addNewFood)

router.route('/menu/:foodId')
.patch(editPrice)

export default router;