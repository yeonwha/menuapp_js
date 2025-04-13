import PrimaryButton from "./Buttons/PrimaryButton"

export default function Form() {
    return(
    <>
    <div className="food_add_form border-2 border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Add Food Menu</h2>
        <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Food category select form */}
            <div>
                <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900">Category</label>
                <select id="category" className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="" disabled selected>Select...</option>
                    <option value="Main">Main</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Drink">Drink</option>
                </select>
            </div>
            {/* Food image upload */}
            <div>
                <label className="block mb-2 text-lg font-medium text-gray-900" htmlFor="file_input">Image</label>
                <div className="flex items-center">
                    <input className="hidden" id="file_input" type="file" />
                    <label htmlFor="file_input" className="cursor-pointer bg-white border border-gray-300 text-gray-900 rounded-lg py-2.5 px-4">
                    Choose File
                    </label>
                    <span className="ml-4 text-gray-500">No file chosen</span>
                </div>
            </div>
        </div>
        {/* Food name */}
        <div className="mb-6">
            <input type="text" id="food_name" className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Food name" />
        </div>
        {/* Food price */}
        <div className="mb-6">
            <input type="text" id="food_price" className="bg-white border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Food price" />
        </div>
        {/* Add button */}
        <div className="flex justify-end">
            <PrimaryButton>Add</PrimaryButton>
        </div>
    </div>
    </>
    )
}