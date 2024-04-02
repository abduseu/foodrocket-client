import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import RestaurantDrawer from "./RestaurantDrawer";

const DonateFood = () => {
    const { user } = useAuth()
    const restaurantData = useAxios(`/restaurant-email?email=${user.email}`)

    const handleDonateFood = (e) => {
        e.preventDefault();
        const donation = {
            restaurantId: restaurantData._id,
            restaurantName: restaurantData.name,
            restaurantAddress: restaurantData.address,
            restaurantPhone: restaurantData.phone,
            restaurantEmail: restaurantData.email,
            details: e.target.details.value,
            weight: e.target.weight.value,
            status: "pending",
        }

        axiosBase.post('/foodbank', donation)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Donated!',
                        'Donation placed successfully',
                        'success'
                    );
                    e.target.reset();   //clear form
                }
            })
    }


    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Donate Food</h3>
                        <div className="space-y-4 md:px-10 text-left">
                            <form onSubmit={handleDonateFood}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div>
                                        <h3>Food Details:</h3>
                                        <input type="text" name="details" placeholder="ex. Rice, Curry, Salad" className="input input-bordered w-full" required />
                                    </div>
                                    <div>
                                        <h3>Total Weight (kg.):</h3>
                                        <input type="number" name="weight" placeholder="ex. 0.5 KG" step="0.1" min="0" className="input input-bordered w-full" required />
                                    </div>
                                </div>
                                <div className="text-center pt-10">
                                    <button className="btn btn-prim hover:bg-black text-white block mx-auto mt-4">Donate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateFood;