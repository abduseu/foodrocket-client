import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import CardMenu from "../components/CardMenu";

const ViewRestaurant = () => {
    const {id} = useParams()
    const restaurant = useAxios(`/restaurants/${id}`)
    const menu = useAxios(`/menu-restaurantId/${id}`)

    return (
        <div>
            <div className="border rounded-lg">
                <div className="text-center p-5 gap-5 w-full">
                    <h2 className="text-xl md:text-3xl font-bold uppercase">{restaurant.name}</h2>
                    <small>{restaurant.hours}</small>
                    <p>{restaurant.email}</p>
                </div>
                <div className="lg:flex">
                    <div className="p-5 w-full space-y-12">
                        {
                            menu.map(x => <CardMenu key={x._id} obj={x} />)
                        }
                    </div>
                    {/* <div className="p-5 w-full space-y-12">
                        Side B
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ViewRestaurant;