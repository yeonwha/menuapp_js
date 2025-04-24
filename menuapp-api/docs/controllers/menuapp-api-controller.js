// GET request handler
const getAllFoods = (req, res) => {
    res.status(200).send('Suucessful API GET request');
};

// POST request handler
const addNewFood = async (req, res) => {
    res.status(200).send('Successful API POST request');
};

export { getAllFoods, addNewFood };