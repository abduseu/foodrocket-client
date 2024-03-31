import { useParams } from "react-router-dom";
import useAxios, { axiosBase } from "../hooks/useAxios";
import CardMenu from "../components/CardMenu";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useFavorite from "../hooks/useFavorite";

const ViewRestaurant = () => {
    const { id } = useParams()
    const restaurant = useAxios(`/restaurants/${id}`)
    const menu = useAxios(`/menu-restaurantId/${id}`)

    const { user } = useAuth()
    const [favorite, refetch] = useFavorite()


    const handleToggleFavorite = (id) => {
        const fav = {
            userId: user.email,
            restaurantId: id,
            restaurantName: restaurant.name,
        }

        if (!favorite[0]?.restaurantId) {
            //add
            axiosBase.post('/favorite', fav)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                    }
                })
        } else {
            //delete
            axiosBase.delete(`/favorite/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch()
                    }
                });
        }



    }

    return (
        <div>
            <div className="border rounded-lg">
                <div className="text-center p-5 gap-5 w-full">
                    <h2 className="text-xl md:text-3xl font-bold uppercase">{restaurant.name}</h2>
                    <small>{restaurant.hours}</small>
                    <p>{restaurant.email}</p>
                    <button onClick={() => handleToggleFavorite(id)} className="btn btn-sm">{favorite[0]?.restaurantId ? <FaHeart /> : <FaRegHeart />}Add to Favorites</button>
                </div>
                <div className="lg:flex">
                    <div className="p-5 w-full space-y-12">
                        {
                            menu.map(x => <CardMenu key={x._id} obj={x} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewRestaurant;