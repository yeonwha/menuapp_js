import axios from "axios";

export default async function deleteFood(selectedFood, setFoodList){
    await axios.delete(`http://192.168.0.14:3004/m1/menu/${selectedFood.id}`);
    const updatedFoodList = await axios.get('http://192.168.0.14:3004/m1/menu');
    setFoodList(updatedFoodList.data);
}