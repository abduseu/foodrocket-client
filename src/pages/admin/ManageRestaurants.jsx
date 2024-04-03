import { Link } from "react-router-dom";
import AdminDrawer from "./AdminDrawer";
import { axiosBase } from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])

    //fetch restaurant
    useEffect(() => {
        axiosBase(`/restaurants`)
            .then(res => {
                setRestaurants(res.data);
            });
    }, []);

    //Delete item
    const handleDeleteRestaurant = (id) => {
        axiosBase.delete(`/restaurants/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Restaurant has been deleted',
                        'success'
                    );
                    const remaining = restaurants.filter(x => x._id !== id);
                    setRestaurants(remaining);
                }
            });
    };

    return (
        <div className="md:flex border">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Menu</h3>
                        <div>
                            {restaurants == '' ? <span className="loading loading-ring loading-lg"></span> :

                                restaurants.map((x, index) =>
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <h3 className="font-semibold text-sm">{index + 1}. {x.name}</h3>
                                                <small>{x.email}</small>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center gap-2 font-semibold text-sm">
                                            <Link to={`/update-restaurant/${x._id}`}><button className="btn btn-sm btn-success bg-green text-white">Edit</button></Link>
                                            <button onClick={() => handleDeleteRestaurant(x._id)} className="btn btn-sm btn-error bg-red-600 text-white">X</button>
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

export default ManageRestaurants;