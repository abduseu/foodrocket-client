import RestaurantName from "../../components/RestaurantName";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import UserDrawer from "./UserDrawer";

const PlacedOrders = () => {
    const { user } = useAuth()
    const orders = useAxios(`/placed-orders?email=${user.email}`)

    return (
        <div className="md:flex border">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Placed Orders</h3>
                        <div className="space-y-1">
                            {
                                orders.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center">
                                        <div className="md:flex items-center">
                                            <div>
                                                <h3 className="font-semibold">{index + 1}. <RestaurantName id={x.restaurantId} /></h3>
                                            </div>
                                        </div>
                                        <div className="grid grid-flow-col items-center gap-4 text-right">
                                            <h3 className="prim font-semibold w-20">${x.totalPrice}</h3>
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

export default PlacedOrders;