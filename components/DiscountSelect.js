 import PrimaryButton from "./Buttons/PrimaryButton"

 export default function DiscountSelect({foodList}) {
    return(
    <>
    <div className="food_add_form border-2 border-gray-200 rounded-lg p-6 max-w-4xl mx-2 items-center">
        <h2 className="text-xl font-bold text-center mb-6">Discount Apply</h2>
        <div className="grid grid-cols-2 gap-6">
            {/*Selected Food*/}
            <div>
                <p>Selected Foods:</p>
                {foodList.map((food) => <p key={food.id}>{food.checked ? food.name : ""}</p>)}
            </div>
        </div>
        {/* Discount Apply button */}
        <div className="flex justify-end">
            <PrimaryButton>Apply</PrimaryButton>
        </div>
    </div>
    </>
    )
 }