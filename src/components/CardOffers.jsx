import { Link } from "react-router-dom";

const CardOffers = ({ obj }) => {
    const { _id, image, name, deal } = obj

    return (
        <div>
            <Link to={`/restaurant/${_id}`}>
                <div className="bg-prim flex flex-col justify-end items-center p-5 h-full rounded-lg w-80">
                    <div className="-ml-11 text-left w-full">
                        {deal > 0 &&
                            <div className="bg-white prim font-semibold text-sm text-center uppercase w-20 p-0.5 rounded-r-sm">
                                <h4>{deal}% off</h4>
                            </div>
                        }
                    </div>
                    <div className="w-32 h-32">
                        <img src={image} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold">{name}</h3>
                </div>
            </Link>
        </div>
    );
};

export default CardOffers;