import { Link } from "react-router-dom";

const CardMenu = () => {
    return (
        <Link to={`/`}>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <img src={'https://i.ibb.co/SVLQTMc/plate-04.png'} className=" w-24" />
                    <div>
                        <h3 className="font-bold text-xl">Grill Chicken</h3>
                        <p className="text-sm px-2">Chicken, Sauce, Naan</p>
                    </div>
                </div>
                <h3 className="green font-bold text-xl">${'12'}</h3>
            </div>
        </Link>
    );
};

export default CardMenu;