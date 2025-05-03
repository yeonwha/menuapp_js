import axios from "axios";


export default async function addNewFood( formData , setFoodList ) {
    try {
        let newFood = {
            "category": formData.get("category"),
            "name": formData.get("food_name"), 
            "price": formData.get("food_price"),
        }
        console.log("newFood:", newFood);
        await axios.post('http://192.168.0.14:3004/m1/menu', newFood);
        const updatedFoodList = await axios.get('http://192.168.0.14:3004/m1/menu');
        console.log(updatedFoodList.data);
        setFoodList(updatedFoodList.data);
    }
    catch (err) {
        console.log('Bad request. something wrong');
    }    
}