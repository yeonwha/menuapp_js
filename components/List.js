import PrimaryButton from "./Buttons/PrimaryButton";
import DangerButton from "./Buttons/DangerButton";

export default function List({foodList, setFoodList}) {
    const foodCategory = ["Main", "Dessert", "Drink"];
    
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
    
    return (
        <>
        <ol>
            {foodCategory.map((category, index) => (
                <div key={index} className="my-6 mx-8">
                    <li key={index} className="text-lg font-medium text-gray-900">{category}</li>
                    <table>
                        <thead >
                            <tr >
                                <th className="p-3" name="food_number"></th>
                                <th className="p-3" name="food_name"></th>
                                <th className="p-3" name="food_price"></th>
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
                                            <PrimaryButton className="font-semibold bg-green-600" onClick={() => editPrice(selectedFood)}>
                                                Edit
                                            </PrimaryButton>
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