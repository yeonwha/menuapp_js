import axios from "axios";

/**
 * DELETE calling function to delete a food item
 * send a delete request with the selected food's id
 * then re-render the main page
 * @param {*} selectedFood 
 * @param {*} setFoodList 
 */
export default async function deleteFood(selectedFood, setFoodList){
    await axios.delete(`http://localhost:3004/m1/menu/${selectedFood.id}`);
    const updatedFoodList = await axios.get('http://localhost:3004/m1/menu');
    setFoodList(updatedFoodList.data);
}