import CardRestaurant from "../components/CardRestaurant";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
    const restaurants = useAxios('/restaurants')

    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                restaurants.map(x=> <CardRestaurant key={x._id} obj={x} /> )
            }
        </div>
    );
};

export default HomePage;