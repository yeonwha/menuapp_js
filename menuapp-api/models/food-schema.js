import mongoose from "mongoose";

// Data Schema for a new Food
// If it doesn't match from the front-end requests,
// The request will be rejected
const foodSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        trim: true,
        match: /\b(Main?|Dessert?|Drink?)\b/
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 30,
        match: /^[A-Za-z0-9 ]+$/
    },
    price: {
        type: Number,
        required: true,
        min: [0.1, 'Food name must be at least $0.1'],
        max: [999.999, 'Food price cannot be higher than $999.999']
    },
    checked: {
        type: Boolean,
        default: false,
    }
});

foodSchema.set('toJSON', {
    versionKey: false,
    virtuals: true,
    transform: (doc, ret) => { delete ret._id; }
});

const foodModel = mongoose.model('food', foodSchema); // Define and register the model

export default foodModel;
