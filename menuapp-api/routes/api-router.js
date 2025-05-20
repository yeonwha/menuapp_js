import express from 'express';
import { getAllFoods, addNewFood, editPrice, deleteFood, applyDiscount} from '../controllers/menuapp-api-controller.js';

const router = express.Router();

router.route('/menu')
.get(getAllFoods)
.post(addNewFood)

router.route('/menu/discount')
.patch(applyDiscount);

router.route('/menu/:foodId')
.patch(editPrice)
.delete(deleteFood)

export default router;