import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import Swal from "sweetalert2";
import RiderDrawer from "./RiderDrawer";

const MyContributions = () => {
    const { user } = useAuth()
    const foodbank = useAxios('/foodbank')
    const MyContributions = foodbank.filter(x => x.rider === user.email)
    const navigate = useNavigate()

    const handleCompleteContribution = (id) => {
        const donationInfo = {
            status: 'completed',
        }

        axiosBase.put(`/foodbank/${id}`, donationInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Task Completed!',
                        'Task has been Accepted!',
                        'success'
                    )
                    window.location.reload();
                }
            })
    }

    const handleCancelContribution = (id) => {
        const donationInfo = {
            status: 'pending',
            rider: '',
        }

        axiosBase.put(`/foodbank/${id}`, donationInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Task Canceld!',
                        'Task has been Canceled!',
                        'info'
                    )
                    navigate('/volunteer-task')
                }
            })
    }

    return (
        <div className="md:flex border">
            <RiderDrawer></RiderDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">My Contributions</h3>
                        <div>
                            {
                                MyContributions.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <h3 className="font-semibold text-sm">{index + 1}. {x.restaurantName}</h3>
                                                <small>{x.details} | <span>{x.weight} (kg.)</span></small>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-end items-end font-semibold text-sm">
                                            <small>{x.restaurantAddress}</small>
                                            {x.status == 'picked-up' ?
                                                <div className="flex justify-center gap-1">
                                                    <button onClick={() => handleCompleteContribution(x._id)} className="btn btn-xs btn-success bg-green text-white">Complete</button>
                                                    <button onClick={() => handleCancelContribution(x._id)} className="btn btn-xs btn-error bg-red text-white">Cancel</button>
                                                </div> :
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

export default MyContributions;