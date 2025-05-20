import mongoose from "mongoose";
import yup from 'yup';

// Data Schema for a new Food
// Matches the one from the front-end App
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

//export default mongoose.model('food', foodSchema);

// const foodSchema = yup.object().shape({
//     category: yup
//         .string()
//         .required(),
//     name: yup
//         .string()
//         .trim()
//         .min(2, 'Food nmae must be at least ${min} characters')
//         .max(15, 'Food nmae cannot be more than ${max} characters')
//         .matches(/^[A-Za-z0-9 ]+$/, 'Invalid name. Use upper or lower case letters, 0 to 9, or whitespace only.')
//         .required('Food name is required.'),
//     price: yup
//         .number()
//         .positive()
//         .min(0.1, 'Food price must be at least ${min} dollars')
//         .max(999.999, 'Food price cannot be higher than ${max} dollars')
//         .required('Food price is required'),
// });

// export default foodSchema;
