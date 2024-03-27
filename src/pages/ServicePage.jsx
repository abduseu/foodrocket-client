import CardRestaurant from "../components/CardRestaurant";
import useAxios from "../hooks/useAxios";

const ServicePage = () => {
    const restaurants = useAxios('/restaurants')

    return (
        <div>
            <h1 className="text-5xl font-bold pb-8">Services</h1>
            <div className="grid md:grid-cols-4 gap-4">
                {
                    restaurants.map(x => <CardRestaurant key={x._id} obj={x} />)
                }
            </div>
        </div>
    );
};

export default ServicePage;