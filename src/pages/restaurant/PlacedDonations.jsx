import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import RestaurantDrawer from "./RestaurantDrawer";
import { useNavigate } from "react-router-dom";

const PlacedDonations = () => {
    const { user } = useAuth()
    const donations = useAxios(`/placed-donations?email=${user.email}`)
    const navigate = useNavigate()

    const handleCancelDonation = (id) => {
        axiosBase.delete(`/foodbank/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Canceled!',
                        'Donation has been canceled',
                        'info'
                    );
                    navigate('/donate-food')
                }
            });
    }

    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Placed Donations</h3>
                        <div>
                            {donations == '' ? <span className="loading loading-ring loading-lg"></span> :

                                donations.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <h3 className="font-semibold text-sm">{index + 1}. {x.details}</h3>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            {x.status == 'pending' ?
                                                <button onClick={() => handleCancelDonation(x._id)} className="btn btn-xs btn-error bg-red text-white">Cancel</button> :
                                                <span className="capitalize">{x.status}</span>
                                            }
                                            
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacedDonations;