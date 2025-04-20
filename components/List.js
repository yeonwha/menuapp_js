import DangerButton from "./Buttons/DangerButton";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function List({foodList, setFoodList}) {
    const foodCategory = ["Main", "Dessert", "Drink"];

    function checkHandler(selectedFood) {
        console.log(selectedFood.checked)
        // const updatedFoodList = foodList.map((food) => {
        //     if (food.id === selectedFood.id) {
        //         food.checked = food.checked ? false : true;
        //     }
        // });
        // setFoodList(updatedFoodList);
      }
    

    return (
        <>
        <ol>
            {foodCategory.map((category, index) => (
                <div key={index}>
                    <li key={index}>{category}</li>
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
                                        <input type="checkbox" name={selectedFood.name + selectedFood.id} id={index} onChange={checkHandler(selectedFood)}/>
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
                    <hr />
                </div>
            ))}
        </ol>
        </>
    )
}