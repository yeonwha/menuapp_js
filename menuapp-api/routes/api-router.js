import express from 'express';
import { getAllFoods, addNewFood, editPrice, deleteFood } from '../controllers/menuapp-api-controller.js';

const router = express.Router();

router.route('/menu')
.get(getAllFoods)
.post(addNewFood)

router.route('/menu/:foodId')
.patch(editPrice)
.delete(deleteFood)

export default router;