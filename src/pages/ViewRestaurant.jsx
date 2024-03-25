import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import CardMenu from "../components/CardMenu";

const ViewRestaurant = () => {
    const {id} = useParams()
    const restaurant = useAxios(`/restaurants/${id}`)
    
    return (
        <div>
            <div className="border rounded-lg">
                <div className="text-center text-xl md:text-3xl font-bold p-5 gap-5 w-full uppercase">
                    {restaurant.name}
                </div>
                <div className="lg:flex">
                    <div className="p-5 w-full space-y-12">
                        <CardMenu/>
                        <CardMenu/>
                        <CardMenu/>
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