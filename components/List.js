import DangerButton from "../DangerButton";
import SecondaryButton from "./Buttons/SecondaryButton";

export default function List() {
    return (
        <>
            <div className="bg-white dark:bg-black dark:text-white overflow-hidden shadow-sm sm:rounded-lg mx-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left rtl:text-right text-black dark:text-white">
                        <thead className="text-xs text-white bg-black dark:text-white border-b-2 border-white">
                            <tr className="text-nowrap">
                                <th className="p-3" name="food_number"></th>
                                <th className="p-3" name="food_name"></th>
                                <th className="p-3" name="food_price"></th>
                            </tr>
                        </thead>
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                            <tr className="text-nowrap">
                                <th className="py-3"></th>
                                <th className="py-3"></th>
                                <th className="py-3"></th>
                                <th className="py-3"></th>
                                <th className="py-3"></th>
                                <th className="py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {foodList.map((food, index) => (
                                <tr key={player.id} className="text-black dark:text-white dark:border-white even:bg-blue/20 odd:bg-black">
                                    <td className="px-3 py-2.5">{index + 1}</td>
                                    <td className="px-3 py-2">{food.name}</td>
                                    <td className="px-3 py-2">{food.price}</td>
                                        <td className="px-3 py-2">
                                            <SecondaryButton className="font-semibold bg-green" onClick={() => editPrice(food)}>
                                                Edit
                                            </SecondaryButton>
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
                </div>
            </div>
        </>
    )
}