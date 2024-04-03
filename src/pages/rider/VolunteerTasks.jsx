import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import RiderDrawer from "./RiderDrawer";
import { useNavigate } from "react-router-dom";

const VolunteerTasks = () => {
    const { user } = useAuth()
    const foodbank = useAxios('/foodbank')
    const AvailableTasks = foodbank.filter(x => x.status === 'pending')
    const navigate = useNavigate()

    const handleAcceptTask = (id) => {
        const donationInfo = {
            status: 'picked-up',
            rider: user.email,
        }

        axiosBase.put(`/foodbank/${id}`, donationInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Task Accepted!',
                        'Task has been Accepted!',
                        'success'
                    )
                    navigate('/my-contributions')
                }
            })
    }

    return (
        <div className="md:flex border">
            <RiderDrawer></RiderDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Volunteer Task</h3>
                        <div className="space-y-4">
                            {AvailableTasks.map((x, index) => (
                                <div key={x._id} className="flex justify-between items-center my-4 mx-auto">
                                    <div className="md:flex items-center border rounded-lg p-8 w-full">
                                        <div className="w-full">
                                            <div className='flex justify-between mb-2'>
                                                <h3>Pick: <span>{x.restaurantAddress}</span></h3>
                                                <h3>Drop: <span>FoodRocket Office</span></h3>
                                            </div>
                                            <div>
                                                <li className="flex justify-between gap-2">
                                                    <div>
                                                        <p className="font-semibold">{index + 1}. {x.restaurantName}</p>
                                                        <small>{x.details}</small>
                                                    </div>
                                                    <div className="flex gap-2 md:gap-8">
                                                        <p>{x.weight} (kg.)</p>
                                                    </div>
                                                </li>
                                            </div>
                                            {x.status === "pending" &&
                                                <div className="flex justify-center gap-4">
                                                    <button className="btn btn-success bg-green text-white" onClick={() => handleAcceptTask(x._id)}>Accept</button>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerTasks;