import { Link } from "react-router-dom";

const CardRestaurant = ({ obj }) => {
    const { _id, image, name, deal } = obj
    return (
        <Link to={`/restaurant/${_id}`}>
            <div className="p-5 bg-gray rounded-lg flex flex-col justify-between items-center h-full">
                <div className=" -ml-10 text-left w-full">
                    {deal > 10 &&
                        <div className="bg-prim2 prim font-semibold text-center uppercase p-1 w-24 rounded-r-sm">
                            <h4>{deal}% off</h4>
                        </div>
                    }
                </div>
                <img src={image} />
                <h3 className="font-bold text-2xl">{name}</h3>
            </div>
        </Link>
    );
};

export default CardRestaurant;