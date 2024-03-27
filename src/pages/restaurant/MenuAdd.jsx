import Swal from "sweetalert2";
import { axiosBase } from "../../hooks/useAxios";
import RestaurantDrawer from "./RestaurantDrawer";
import useAuth from "../../hooks/useAuth";

const MenuAdd = () => {
    const {user} = useAuth()

    const handleAddItem = e => {
        e.preventDefault()
        const form = e.target
        const food_name = form.foodName.value
        const food_category = form.foodCategory.value
        const ingredients = form.ingredients.value
        const price = form.price.value
        const food_image = form.image.value
        const restaurantId = user.email
        
        const item = { restaurantId, food_name, food_category, ingredients, price, food_image }

        console.log('form:', item)

        axiosBase.post('/menu', item)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire(
                        'Food item Added!',
                        'Your food item has beed Added!',
                        'success'
                    )
                }
            })
    }
    
    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Add Menu</h3>
                        <div className="space-y-4 md:px-10 text-left">
                            <form onSubmit={handleAddItem}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h3>Food Name:</h3>
                                        <input type="text" name="foodName" placeholder="Name" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Food Category:</h3>
                                        <select name="foodCategory" className="select select-bordered w-full">
                                            <option value="Appetizer">Appetizer</option>
                                            <option value="Dessert">Dessert</option>
                                            <option value="Entrees">Entrees</option>
                                            <option value="Signature">Signature</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Ingredients:</h3>
                                        <input type="text" name="ingredients" placeholder="ex. Baguette, Garlic, Butter" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Price:</h3>
                                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Image URL:</h3>
                                        <input type="url" name="image" placeholder="Paste image url here" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="text-center pt-10">
                                    <button className="btn btn-prim hover:bg-black text-white block mx-auto mt-4">Add Item</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuAdd;