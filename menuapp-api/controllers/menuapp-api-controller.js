
import mongoose from "mongoose";

// const foodModel = mongoose.model('food');
import foodModel from "../models/food-schema.js";

// Initial temporary data to send to the frontend (before database setup)
// const foodList = [
//     {id: 1, category: "Main", name: "Pasta", price: 21.99, checked: false },
//     {id: 2, category: "Main", name: "Cheese burger", price: 11.49, checked: false},
//     {id: 3, category: "Main", name: "Salad", price: 14.99, checked: false},
//     {id: 4, category: "Dessert", name: "Chocolate icecream", price: 6.99, checked: false},
//     {id: 5, category: "Dessert", name: "Vanilia cake", price: 8.49, checked: false},
//     {id: 6, category: "Drink", name: "Zero sprite", price: 3.49, checked: false},
//     {id: 7, category: "Drink", name: "Ginger ale", price: 3.49, checked: false},
//     {id: 8, category: "Drink", name: "Cappucino", price: 2.99, checked: false},
//   ];

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
// 1. Create a new model with request body,
// 2. send 201 code with the created food model
// 3. If the name not matched with the validation, send validation error (400)
const addNewFood = async (req, res) => {
    try {
        // let food = await foodSchema.validate(req.body);
        // foodId++;
        // const newFood = {
        //     id: foodId, 
        //     category: food.category, 
        //     name: food.name, 
        //     price: food.price, 
        //     checked: false
        // };
        // foodList.push(newFood);
        // console.log(req.body);
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
// 2. If no food, send 404 Not Found error,
// 3. Else, edit the food's price in data and save,
// 4. Send 204 (No Content) successful status code.
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
        res.status(400).send('bad request');
    }
}

// DELETE to delete a certain food
// 1. Find the food from database with the food id endpoint, 
// 2. If no food, send 404 Not Found error,
// 3. Else, delete the food from database,
// 4. Send 204 (No Content) successful status code.
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
        res.status(400).send('bad request');
    }
}

// PATCH to update checked foods' price
const applyDiscount = async (req, res) => {
    try {
        const { rate, foodIds } = req.body;

        if (!Array.isArray(foodIds) || foodIds.length === 0) {
            return res.status(400).json({ message: 'No food items selected for discount.' });
        }
        const discountMultiplier = 1 - rate;
        const  query = {
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