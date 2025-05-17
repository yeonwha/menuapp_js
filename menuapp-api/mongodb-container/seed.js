import { MongoClient } from 'mongodb';

async function seedDatabase() {
  const uri = process.env.MONGO_URI || 'mongodb://localhost:27017'; // Fallback if env var not set
  const dbName = process.env.MONGO_DB || 'menu_db';
  const collectionName = 'foods'; 

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const seedData = [
      { category: "Main", name: "Pasta", price: 21.99, checked: false },
      { category: "Main", name: "Cheese burger", price: 11.49, checked: false },
      { category: "Main", name: "Salad", price: 14.99, checked: false },
      { category: "Dessert", name: "Chocolate icecream", price: 6.99, checked: false },
      { category: "Dessert", name: "Vanilia cake", price: 8.49, checked: false },
      { category: "Drink", name: "Zero sprite", price: 3.49, checked: false },
      { category: "Drink", name: "Ginger ale", price: 3.49, checked: false },
      { category: "Drink", name: "Cappucino", price: 2.99, checked: false },
    ];

    console.log(`Connecting to MongoDB at: ${uri}, database: ${dbName}, collection: ${collectionName}`);

    const deleteResult = await collection.deleteMany({});
    console.log(`Deleted ${deleteResult.deletedCount} existing documents.`);

    const insertResult = await collection.insertMany(seedData);
    console.log(`Inserted ${insertResult.insertedCount} documents.`);

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

seedDatabase();

// db = db.getSiblingDB('menu_db');

// const seedData = [
//     {category: "Main", name: "Pasta", price: 21.99, checked: false },
//     {category: "Main", name: "Cheese burger", price: 11.49, checked: false},
//     {category: "Main", name: "Salad", price: 14.99, checked: false},
//     {category: "Dessert", name: "Chocolate icecream", price: 6.99, checked: false},
//     {category: "Dessert", name: "Vanilia cake", price: 8.49, checked: false},
//     {category: "Drink", name: "Zero sprite", price: 3.49, checked: false},
//     {category: "Drink", name: "Ginger ale", price: 3.49, checked: false},
//     {category: "Drink", name: "Cappucino", price: 2.99, checked: false},
//   ];

//   db.foods.insertMany(seedData);