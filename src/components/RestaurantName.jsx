import useAxios from "../hooks/useAxios";

const RestaurantName = ({id}) => {
    const restaurant = useAxios(`/restaurants/${id}`)

    return restaurant.name
};

export default RestaurantName;