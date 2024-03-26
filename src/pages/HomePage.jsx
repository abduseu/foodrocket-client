import CardRestaurant from "../components/CardRestaurant";
import Offers2 from "../components/Offers2";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
    const restaurants = useAxios('/restaurants')

    return (
        <div>
            <Offers2 obj={restaurants} />
            <div className="grid md:grid-cols-4 gap-4">
                {
                    restaurants.map(x => <CardRestaurant key={x._id} obj={x} />)
                }
            </div>
        </div>
    );
};

export default HomePage;