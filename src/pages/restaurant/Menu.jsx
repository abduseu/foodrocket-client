import { Link } from "react-router-dom";
import RestaurantDrawer from "./RestaurantDrawer";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { axiosBase } from "../../hooks/useAxios";
import Swal from "sweetalert2";

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

    //Delete item
    const handleDeleteItem = (id) => {
        axiosBase.delete(`/menu/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Food item deleted from menu.',
                        'success'
                    );
                    const remaining = menu.filter(x => x._id !== id);
                    setMenu(remaining);
                }
            });
    };

    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Menu</h3>
                        <div>
                            {menu == '' ? <span className="loading loading-ring loading-lg"></span> :

                                menu.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <h3 className="font-semibold text-sm">{index + 1}. {x.food_name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            <h3 className="prim text-right">${x.price}</h3>
                                            <Link to={`/menu/update/${x._id}`}><button className="btn btn-sm">Edit</button></Link>
                                            <button onClick={() => handleDeleteItem(x._id)} className="btn btn-sm text-red-600">X</button>
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