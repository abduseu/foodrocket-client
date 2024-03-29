import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import RestaurantDrawer from "./RestaurantDrawer";

const ReceivedOrders = () => {
    const { user } = useAuth()
    const restaurantId = useAxios(`/restaurant-email?email=${user.email}`)
    const orders = useAxios(`/received-orders?id=${restaurantId._id}`)


    const handleMarkAsComplete = () => {


    }

    const handleDeleteOrder = () => {

    }

    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase text-center">Received Orders</h3>
                        <div className="space-y-1">
                            {orders == '' && <span className="loading loading-ring loading-lg"></span>}
                            {orders.map(order => (
                                <div key={order._id} className="flex justify-between items-center my-4 mx-auto">
                                    <div className="md:flex items-center border rounded-lg p-8 w-full">
                                        <div className="w-full">
                                            <h3>{order.userId}</h3>
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
                                                {order.status === "pending" && <p className="capitalize red">{order.status}</p>}
                                                {order.status === "completed" && <p className="capitalize green">{order.status}</p>}
                                                
                                                <p className="font-bold text-right">Total: <span>${order.totalPrice}</span></p>
                                            </div>
                                            {order.status === "pending" ? (
                                                <div>
                                                    <button className="btn btn-success bg-prim text-white block mx-auto" onClick={() => handleMarkAsComplete(order._id)}>Mark as complete</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <button className="btn btn-error bg-red-600 text-white block mx-auto" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                                                </div>
                                            )}
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

export default ReceivedOrders;