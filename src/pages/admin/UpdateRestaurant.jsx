import Swal from "sweetalert2";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import AdminDrawer from "./AdminDrawer";
import { useParams } from "react-router-dom";

const UpdateRestaurant = () => {
    const {id} = useParams()
    const restaurant = useAxios(`/restaurants/${id}`)
    const { _id, name, address, area, phone, email, hours, image } = restaurant

    const handleUpdateRestaurant = (e) => {
        e.preventDefault()
        const form = e.target

        const restaurantInfo = {
            name: form.name.value,
            address: form.address.value,
            area: form.area.value,
            phone: form.phone.value,
            email: form.email.value,
            hours: form.hours.value,
            image: form.image.value,
        }

        axiosBase.put(`/restaurants/${_id}`, restaurantInfo)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Restaurant Updated!',
                        'Restaurant info has been updated',
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
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Update Restaurant</h3>
                        <div className="space-y-4 md:px-10 text-left">
                            <form onSubmit={handleUpdateRestaurant}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h3>Restaurant Name:</h3>
                                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Email:</h3>
                                        <input type="email" name="email" defaultValue={email} placeholder="email" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Address:</h3>
                                        <input type="text" name="address" defaultValue={address} placeholder="ex. 123 Tandoori Lane, NY" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Area:</h3>
                                        <select name="area" defaultValue={area} className="select select-bordered w-full">
                                            <option value="New York">New York</option>
                                        </select>
                                    </div>
                                    <div>
                                        <h3>Open hours:</h3>
                                        <input type="text" name="hours" defaultValue={hours} placeholder="10:00 AM - 10:00 PM" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Phone:</h3>
                                        <input type="text" name="phone" defaultValue={phone} placeholder="Phone number" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Image URL:</h3>
                                        <input type="url" name="image" defaultValue={image} placeholder="Paste image url here" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="text-center pt-10">
                                    <button className="btn btn-prim hover:bg-black text-white block mx-auto mt-4">Update Restaurant</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateRestaurant;