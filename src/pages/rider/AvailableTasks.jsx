import Swal from 'sweetalert2';
import useAxios, { axiosBase } from '../../hooks/useAxios';
import RiderDrawer from './RiderDrawer';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const AvailableTasks = () => {
    const { user } = useAuth()
    const orders = useAxios('/orders')
    const AvailableTasks = orders.filter(x => x.status === 'accepted')
    const navigate = useNavigate()

    const handleAcceptTask = (id) => {
        const orderInfo = {
            status: 'picked-up',
            rider: user.email,
        }

        axiosBase.put(`/orders/${id}`, orderInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Task Accepted!',
                        'Task has been Accepted!',
                        'success'
                    )
                    navigate('/received-task')
                }
            })
    }

    return (
        <div className="md:flex border">
            <RiderDrawer></RiderDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Available Task</h3>
                        <div className="text-xl space-y-4">
                            {AvailableTasks.map(order => (
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
                                                {order.status === "accepted" && <p className="capitalize green">Available</p>}

                                                <p className="font-bold text-right">Total: <span>${order.totalPrice}</span></p>
                                            </div>
                                            {order.status === "accepted" &&
                                                <div className="flex justify-center gap-4">
                                                    <button className="btn btn-success bg-green text-white" onClick={() => handleAcceptTask(order._id)}>Accept</button>
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

export default AvailableTasks;