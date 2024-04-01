import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import RiderDrawer from "./RiderDrawer";
import { useNavigate } from "react-router-dom";

const ReceivedTasks = () => {
    const { user } = useAuth()
    const orders = useAxios('/orders')
    const ReceivedTasks = orders.filter(x => x.rider === user.email)
    const navigate = useNavigate()

    const handleCompleteTask = (id) => {
        const orderInfo = {
            status: 'completed',
        }

        axiosBase.put(`/orders/${id}`, orderInfo)
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


    const handleCancelTask = (id) => {
        const orderInfo = {
            status: 'accepted',
            rider: '',
        }

        axiosBase.put(`/orders/${id}`, orderInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Task Canceld!',
                        'Task has been Canceled!',
                        'info'
                    )
                    navigate('/task')
                }
            })
    }

    return (
        <div className="md:flex border">
            <RiderDrawer></RiderDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Received Task</h3>
                        <div className="text-xl space-y-4">
                            {ReceivedTasks.map(order => (
                                <div key={order._id} className="flex justify-between items-center my-4 mx-auto">
                                    <div className="md:flex items-center border rounded-lg p-8 w-full">
                                        <div className="w-full">
                                            <div className='flex justify-between mb-2'>
                                                <h3>Pick: <span>{order.restaurantId}</span></h3>
                                                <h3>Drop: <span>{order.userAddress}</span></h3>
                                            </div>
                                            <div>
                                                {order.items.map((x, index) => (
                                                    <li key={x.itemId} className="flex justify-between gap-2">
                                                        <p className="font-semibold">{index + 1}. {x.item_name}</p>
                                                        <div className="flex gap-2 md:gap-8">
                                                            <p>Qty: {x.quantity}</p>
                                                            <p>Price: <span>${x.price}</span></p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </div>
                                            <div className="flex justify-between">
                                                {order.status === "picked-up" && <p className="capitalize seco">{order.status}</p>}
                                                {order.status === "completed" && <p className="capitalize green">{order.status}</p>}

                                                <p className="font-bold text-right">Total: <span>${order.totalPrice}</span></p>
                                            </div>
                                            {order.status === "picked-up" &&
                                                <div className="flex justify-center gap-4">
                                                    <button className="btn btn-success bg-green text-white" onClick={() => handleCompleteTask(order._id)}>Complete</button>
                                                    <button className="btn btn-error bg-red text-white" onClick={() => handleCancelTask(order._id)}>Cancel</button>
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

export default ReceivedTasks;