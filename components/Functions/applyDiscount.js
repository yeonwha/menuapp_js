import axios from "axios";

export default async function applyDiscount( formData, selectedFoodIds, setFoodList ){
    try {
        let discountRate = parseFloat(formData.get("discount_rate"));
        console.log("selectedFoodIds:", selectedFoodIds);
        const request = {
            rate: discountRate,
            foodIds: selectedFoodIds
        }
        
        await axios.patch(`http://192.168.0.14:3004/m1/menu/discount`, request);
        const updatedFoodList = await axios.get('http://192.168.0.14:3004/m1/menu');
        setFoodList(updatedFoodList.data);
    }
    catch (err) {
        console.log('Bad request. something wrong');
    } 
}