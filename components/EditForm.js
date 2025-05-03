import PrimaryButton from "./Buttons/PrimaryButton"

export default function EditForm({ selectedItem , handleClose }) {
   function editPriceSubmit(e){
    e.preventDefault();
    const updatedPrice = e.target.value;
    console.log("updated price:", updatedPrice);
   }

   return(
        <>
            <div className="modal">
                <div className="modal-content">
                    <h2><b>{selectedItem.name}</b>&apos;s</h2>
                    <form onSubmit={editPriceSubmit}>
                        <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">New Price:</label>
                        <input
                            type="number"
                            id="price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder={selectedItem.price}
                            required
                        />
                        </div>
                        <div className="flex items-center justify-between">
                        <PrimaryButton className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Apply
                        </PrimaryButton>
                        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={()=> handleClose()}>
                            Cancel
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}