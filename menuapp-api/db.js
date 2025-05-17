import mongoose from "mongoose";

let dbURI = 'mongodb://localhost:27017/menu_db';
mongoose.set('strictQuery', true);
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
})

import './models/food-schema.js';