import express from 'express';
import { getAllFoods, addNewFood, editPrice, deleteFood, applyDiscount } from '../controllers/menuapp-api-controller.js';

const router = express.Router();

// Main page endpoint to render food list and create a new food
router.route('/menu')
.get(getAllFoods)
.post(addNewFood)

// Bulk discount applying endpoint
router.route('/menu/discount')
.patch(applyDiscount);

// Update and delete endpoint for a certain food item with its id
router.route('/menu/:foodId')
.patch(editPrice)
.delete(deleteFood)

export default router;