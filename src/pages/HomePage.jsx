import CardRestaurant from "../components/CardRestaurant";
import Offers from "../components/Offers";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const HomePage = () => {
    const restaurants = useAxios('/restaurants')

    const { search } = useAuth()
    const searchItem = restaurants.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            {search === '' && <Offers obj={restaurants} />}
            <div className="grid md:grid-cols-4 gap-4">
                {search === '' ?
                    restaurants.map(x => <CardRestaurant key={x._id} obj={x} />) :
                    searchItem.map(x => <CardRestaurant key={x._id} obj={x} />)
                }
            </div>
        </div>
    );
};

export default HomePage;