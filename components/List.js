import PrimaryButton from "./Buttons/PrimaryButton";
import DangerButton from "./Buttons/DangerButton";
import { useState } from "react"; 
import EditForm from "./EditForm";

export default function List({foodList, setFoodList}) {
    // Three food categories
    const foodCategory = ["Main", "Dessert", "Drink"];
    
    // Handle checkbox onclick to show what food items are selected.
    // The selected food items are displayed on the DiscountSelect form
    // by iterating the FoodList, and if unselected, update the FoodList.
    function handleClick(selectedFood) {
        const updatedFoodList = foodList.map(f => {
            if (f.id === selectedFood.id) {
                return {
                    ...f,
                    checked: !selectedFood.checked,
                };
            } else {
                return f;
            }
        })
        setFoodList(updatedFoodList);
    }

    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleOpen = (selectedFood) => {
        setSelectedItem(selectedFood);
        setOpenModal(!openModal);
    }
    const handleClose = () => {
        setOpenModal(false);
    }
    return (
        <>
        <ol>
            {foodCategory.map((category, index) => (
                <div key={index} className="my-6 mx-8">
                    <li key={index} className="text-lg font-medium text-gray-900">{category}</li>
                    <table>
                        <thead >
                            <tr >
                                <th className="p-3" name="food_number" />
                                <th className="p-3" name="food_name" />
                                <th className="p-3" name="food_price" />
                            </tr>
                        </thead>
                        <tbody>
                            {foodList.filter((food) => food.category === category).map((selectedFood, index) => (
                                <tr key={selectedFood.id}>
                                    <td>
                                        <input type="checkbox" name={selectedFood.name + selectedFood.id} id={index} 
                                             onChange={() => handleClick(selectedFood)}/>
                                    </td>
                                    <td className="px-3 py-2">{selectedFood.name}</td>
                                    <td className="px-3 py-2">{selectedFood.price}</td>
                                        <td className="px-3 py-2">
                                            <PrimaryButton 
                                                className="font-semibold bg-green-600" 
                                                onClick={() => handleOpen(selectedFood)}
                                            >
                                                Edit
                                            </PrimaryButton>
                                            {openModal && (selectedFood === selectedItem) && (<EditForm key="edit_price_form" selectedItem={selectedItem} handleClose={handleClose}/>)}
                                        </td>
                                        <td className="px-3 py-2">
                                            <DangerButton onClick={() => deleteFood(selectedFood)}>
                                                Delete
                                            </DangerButton>
                                        </td>
                                </tr>
                            ))}
                        </tbody>
                       
                    </table>
                    <hr className="w-160 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
            ))}
        </ol>
        </>
    )
}