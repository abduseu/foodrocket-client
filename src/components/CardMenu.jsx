import { Link } from "react-router-dom";

const CardMenu = ({ obj }) => {
    const { food_image, food_name, ingredients, price } = obj
    console.log(obj)
    return (
        <Link to={`/`}>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <img src={food_image} className=" w-24" />
                    <div>
                        <h3 className="font-bold text-xl">{food_name}</h3>
                        <p className="text-sm px-2">{ingredients}</p>
                    </div>
                </div>
                <h3 className="prim font-bold text-xl">${price}</h3>
            </div>
        </Link>
    );
};

export default CardMenu;