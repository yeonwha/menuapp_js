import mongoose from "mongoose";

const foodModel = mongoose.model('food');
//import foodSchema from "../models/food-schema.js";

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

// GET request handler
const getAllFoods = async (req, res) => {
    try {
        let foods = await foodModel.find( {}, '', {sort: {_id: -1 }}).exec();
        res.status(200).send(foods);
    } 
    catch (err) {
        res.status(400).send('Bad request.');
    }
};

// POST request handler
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

// PATCH
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

export { getAllFoods, addNewFood , editPrice };