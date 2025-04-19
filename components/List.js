import DangerButton from "./Buttons/DangerButton";
import PrimaryButton from "./Buttons/PrimaryButton";

export default function List() {
    const foodCategory = ["Main", "Dessert", "Drink"];

    const foodList = [
        {id: 1, category: "Main", name: "Pasta", price: 21.99 },
        {id: 2, category: "Main", name: "Cheese burger", price: 11.49},
        {id: 3, category: "Main", name: "Salad", price: 14.99},
        {id: 4, category: "Dessert", name: "Chocolate icecream", price: 6.99},
        {id: 5, category: "Dessert", name: "Vanilia cake", price: 8.49},
        {id: 6, category: "Drink", name: "Zero sprite", price: 3.49},
        {id: 7, category: "Drink", name: "Ginger ale", price: 3.49},
        {id: 8, category: "Drink", name: "Cappucino", price: 2.99},
    ];

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
                                    <td className="px-3 py-2.5">{index + 1}</td>
                                    <td className="px-3 py-2">{selectedFood.name}</td>
                                    <td className="px-3 py-2">{selectedFood.price}</td>
                                        <td className="px-3 py-2">
                                            <PrimaryButton className="font-semibold bg-green" onClick={() => editPrice(food)}>
                                                Edit
                                            </PrimaryButton>
                                        </td>
                                        <td className="px-3 py-2">
                                            <DangerButton className="font-semibold bg-red" onClick={() => deleteFood(food)}>
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