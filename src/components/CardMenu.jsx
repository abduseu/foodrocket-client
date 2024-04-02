import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { axiosBase } from "../hooks/useAxios";
import useCart from "../hooks/useCart";

const CardMenu = ({ obj }) => {
    const { _id, restaurantId, food_image, food_name, ingredients, price } = obj;
    const { user } = useAuth();
    const [cart, refetch] = useCart();

    const handleAddCart = () => {
        if (!cart.length || cart.every(x => x.restaurantId === restaurantId)) {
            const item = {
                userId: user.email,
                restaurantId: restaurantId,
                itemId: _id,
                item_name: food_name,
                quantity: 1,
                price
            };

            axiosBase.post('/cart', item)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire(
                            'Item Added!',
                            'Item added to cart!',
                            'success'
                        );
                    }
                })
        } else {
            Swal.fire(
                'Empty the Cart!',
                'Orders from multiple restaurant not allowed',
                'error'
            );
        }
    };

    return (
        <div className="flex justify-between items-center my-4">
            <div className="md:flex items-center">
                <img src={food_image} className=" w-24" />
                <div>
                    <h3 className="font-bold text-xl">{food_name}</h3>
                    <p className="text-sm px-2">{ingredients}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <h3 className="prim font-bold text-xl">${price}</h3>
                <button onClick={handleAddCart} className="btn btn-sm btn-circle btn-success text-xl text hover:bg-black">+</button>
            </div>
        </div>
    );
};

export default CardMenu;