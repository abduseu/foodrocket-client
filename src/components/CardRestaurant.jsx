import { Link } from "react-router-dom";

const CardRestaurant = ({ obj }) => {
    const { _id, image, name, deal, hours } = obj
    return (
        <Link to={`/restaurants/${_id}`}>
            <div className="p-5 border rounded-lg flex flex-col justify-between items-center h-full">
                <div className="-ml-10 text-left w-full">
                    {deal > 0 &&
                        <div className="bg-prim2 prim font-semibold text-center uppercase p-1 w-24 rounded-r-sm">
                            <h4>{deal}% off</h4>
                        </div>
                    }
                </div>
                <img src={image} />
                <h3 className="font-semibold text-xl">{name}</h3>
                <small>{hours}</small>
            </div>
        </Link>
    );
};

export default CardRestaurant;