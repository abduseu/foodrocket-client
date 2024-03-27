import { Link } from "react-router-dom";
import RestaurantDrawer from "./RestaurantDrawer";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { axiosBase } from "../../hooks/useAxios";

const Menu = () => {
    const { user } = useAuth()
    const [menu, setMenu] = useState([])

    //fetch menu
    const filterEmail = user.email;
    useEffect(() => {
        axiosBase(`/menu-query?email=${filterEmail}`)
            .then(res => {
                setMenu(res.data);
            });
    }, [filterEmail]);

    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Menu</h3>
                        <div>
                            {
                                menu.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <Link to={`/details/${x._id}`}>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.food_name}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            <h3 className="prim text-right">${x.price}</h3>
                                            <Link to={`/menu/update/${x._id}`}><button className="btn btn-sm">Edit</button></Link>
                                            <button className="btn btn-sm text-red-600">X</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;