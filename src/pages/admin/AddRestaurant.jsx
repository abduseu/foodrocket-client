import Swal from "sweetalert2";
import { axiosBase } from "../../hooks/useAxios";
import AdminDrawer from "./AdminDrawer";

const AddRestaurant = () => {

    const handleAddRestaurant = (e) => {
        e.preventDefault()
        const form = e.target
        const restaurant = {
            name: form.name.value,
            deal: 0,
            address: form.address.value,
            area: form.area.value,
            phone: form.phone.value,
            email: form.email.value,
            status: "open",
            verification: "verified",
            hours: form.hours.value,
            image: form.image.value,
        }
        console.log(restaurant)


        axiosBase.post('/restaurants', restaurant)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'New Restaurant Added!',
                        'Restaurant has beed Added!',
                        'success'
                    )
                }
            })

    }

    return (
        <div className="md:flex border">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Add Restaurant</h3>
                        <div className="space-y-4 md:px-10 text-left">
                            <form onSubmit={handleAddRestaurant}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h3>Restaurant Name:</h3>
                                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Email:</h3>
                                        <input type="email" name="email" placeholder="email" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Address:</h3>
                                        <input type="text" name="address" placeholder="ex. 123 Tandoori Lane, NY" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Area:</h3>
                                        <select name="area" className="select select-bordered w-full">
                                            <option value="New York">New York</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Open hours:</h3>
                                        <input type="text" name="hours" placeholder="10:00 AM - 10:00 PM" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Phone:</h3>
                                        <input type="text" name="phone" placeholder="Phone number" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Image URL:</h3>
                                        <input type="url" name="image" placeholder="Paste image url here" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="text-center pt-10">
                                    <button className="btn btn-prim hover:bg-black text-white block mx-auto mt-4">Add Restaurant</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRestaurant;