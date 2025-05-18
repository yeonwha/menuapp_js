import axios from "axios";

export default async function editPrice( formData, selectedItem, setFoodList ){
    try {
        let updatedPrice = { "price": formData.get("food_price") };
        //console.log(selectedItem.id);
        await axios.patch(`http://192.168.0.14:3004/m1/menu/${selectedItem.id}`, updatedPrice);
        const updatedFoodList = await axios.get('http://192.168.0.14:3004/m1/menu');
        setFoodList(updatedFoodList.data);
    }
    catch (err) {
        console.log('Bad request. something wrong');
    } 
}