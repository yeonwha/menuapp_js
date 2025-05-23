
import mongoose from "mongoose";

import foodModel from "../models/food-schema.js";

// GET to render all the food items from database
// 1. Find all food models from the database collection,
// 2. send the food list with 200 Code
const getAllFoods = async (req, res) => {
    try {
        let foods = await foodModel.find( {}, '', { sort: { _id: -1 } }).exec();
        res.status(200).send(foods);
    } 
    catch (err) {
        res.status(400).send('Bad request.');
    }
};

// POST to create new food item
// 1. Create a new model as request body,
// 2. send 201 code with the created food model
// 3. If the name not matched with the validation, send validation error (400)
const addNewFood = async (req, res) => {
    try {
        let newFood = await foodModel.create(req.body);

        res.status(201).json(newFood);

    } 
    catch (err) {
        console.error("Error creating new food:", err); 
        if (err.name === 'ValidationError') {
        // Mongoose validation error
        const errors = {};
        for (const field in err.errors) {
            errors[field] = err.errors[field].message;
        }
            res.status(400).send('Bad Request.  \
                The food in the body of the request is either missing or malformed.');
        }
        else {
        // Other errors
        res.status(500).json({ message: 'Server Error', error: err.message });
        }
    }
};

// PATCH to edit a certain food's price
// 1. Find the food from database by the food id endpoint, 
// 2. If no food found, send 404 Not Found error,
// 3. Else, edit the food's price in data and save,
// 4. Send 204 (No Content) successful status code.
// 5. other errors, send 400 Bad request.
const editPrice = async (req, res) => {
    try {
        let food = await foodModel.findById(req.params.foodId).exec();
        if (!food) {
            res.sendStatus(404);
        }
        else {
            let updatedPrice = req.body.price;
            food.price = updatedPrice;
            await food.save();
            res.sendStatus(204);
        }
    }
    catch (err){
        res.status(400).send('Bad request');
    }
}

// DELETE to delete a certain food item
// 1. Find the food from database with the food id endpoint, 
// 2. If no food found, send 404 Not Found error,
// 3. Else, delete the food from database,
// 4. Send 204 (No Content) successful status code.
// 5. Other errors, send 400 Bad request.
const deleteFood = async (req, res) => {
    try {
        let food = await foodModel.findById(req.params.foodId).exec();
        if (!food) {
            res.sendStatus(404);
        }
        else {
            await food.deleteOne();
            res.sendStatus(204);
        }
    }
    catch (err){
        res.status(400).send('Bad request');
    }
}

// PATCH to update checked foods' price
// 1. decontruct the received request body into rate and food ids to update
// 2. mapping only selected foods' id from database (query to filter)
// 3. Apply discount rate by multiplying the discount rate with the current price
// 4. if no food is updated, send 404 (No checked food to update)
// 5. else, send 200 with the number of updated foods
const applyDiscount = async (req, res) => {
    try {
        const { rate, foodIds } = req.body;

        const discountMultiplier = 1 - rate;
        const query = {
            _id: { $in: foodIds.map(id => new mongoose.Types.ObjectId(id)) } // Convert string IDs to ObjectId
        };
        const update = [{
            $set: {
                    price: {
                        $max: [
                            0.1,
                            { $multiply: ['$price', discountMultiplier] }
                        ]
                    },
                    checked: false 
                }
        }];
        const updated = await foodModel.updateMany(query, update, { runValidators: true });
        if (updated.matchedCount === 0) {
            return res.status(404).send('No checked foods found to apply discount.');
        }
        else {
            res.status(200).json({
                message: `Discount applied to ${updated.modifiedCount} foods.`,
                matchedCount: updated.matchedCount,
                modifiedCount: updated.modifiedCount
            });
        }
    }
    catch (err) {
        console.error("Error applying discount:", err);
        if (err.name === 'ValidationError') {
            const errors = {};
            for (const field in err.errors) {
                errors[field] = err.errors[field].message;
            }
            return res.status(400).json({ message: 'Validation Error during discount application', errors });
        }
        res.status(500).send('Server Error applying discount.');
    }
}

export { getAllFoods, addNewFood , editPrice, deleteFood, applyDiscount };