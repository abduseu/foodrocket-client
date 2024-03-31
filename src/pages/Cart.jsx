import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useAxios, { axiosBase } from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";

const Cart = () => {
    const {user} = useAuth()
    const userData = useAxios(`/users/${user.email}`)
    const [cart, refetch] = useCart()
    //const {_id, restaurantId, itemId, item_name, quantity, price } = cart

    const totalPrice = cart.reduce((prev, current) => prev + parseFloat(current.price), 0);     //Calculate total price

    const handleDelete = (id) => {
        axiosBase.delete(`/cart/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Item removed from cart.',
                        'success'
                    );
                }
            });
    }

    const handlePurchase = () => {
        const orderData = {
            userId: user.email,
            userAddress: userData.userAddress,
            restaurantId: cart[0].restaurantId,
            items: cart.map(x => ({
                itemId: x._id,
                item_name: x.item_name,
                quantity: 1,
                price: x.price
            })),
            totalPrice: totalPrice.toFixed(2),
            status: "pending",
        };

        axiosBase.post('/orders', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire(
                        'Success!',
                        'Your order has been placed successfully.',
                        'success'
                    );
                }
                refetch();  //Clear the cart
            })
    }

    return (
        <div>
            <div className="border rounded-lg">
                <div className="text-center text-xl md:text-3xl font-bold p-5 gap-5 w-full uppercase">
                    Cart
                </div>
                <div className="lg:flex">
                    <div className="p-5 w-full md:w-3/4 mx-auto">
                        {
                            cart.map((x, index) =>
                                <div key={x._id} className="flex justify-between items-center my-4">
                                    <div className="md:flex items-center">
                                        <div>
                                            <h3 className="font-bold text-xl">{index + 1}. {x.item_name}</h3>
                                        </div>
                                    </div>
                                    <div className="grid grid-flow-col items-center gap-4 text-right">
                                        <h3 className="prim font-bold text-xl w-20">${x.price}</h3>
                                        <button onClick={() => handleDelete(x._id)} className="btn btn-xs btn-circle btn-error text hover:bg-black">X</button>
                                    </div>
                                </div>
                            )
                        }
                        <div className="text-center py-5">
                            <h3 className="font-bold text-xl pb-5">Total Price: <span>${totalPrice.toFixed(2)}</span></h3>
                            <button onClick={handlePurchase} className="btn btn-success bg-prim text-white block mx-auto">Place order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
