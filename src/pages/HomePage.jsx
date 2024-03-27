import CardRestaurant from "../components/CardRestaurant";
import Offers from "../components/Offers";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
    const restaurants = useAxios('/restaurants')

    return (
        <div>
            <Offers obj={restaurants} />
            <div className="grid md:grid-cols-4 gap-4">
                {
                    restaurants.map(x => <CardRestaurant key={x._id} obj={x} />)
                }
            </div>
        </div>
    );
};

export default HomePage;