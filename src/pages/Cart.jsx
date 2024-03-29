import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { axiosBase } from "../hooks/useAxios";

const Cart = () => {
    const [cart, refetch] = useCart()

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;