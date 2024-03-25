import { Link } from "react-router-dom";

const CardRestaurant = ( {obj} ) => {
    const { _id, name, deal } = obj
    return (
        <Link to={`/restaurant/${_id}`}>
            <div className="p-5 bg-gray rounded-lg flex flex-col justify-center items-center">
                <img src="https://i.ibb.co/SVLQTMc/plate-04.png" />
                <h3 className="font-bold text-2xl">{name}</h3>
                <div>
                    <span className="font-semibold seco uppercase">{deal}% off</span>
                </div>
            </div>
        </Link>
    );
};

export default CardRestaurant;