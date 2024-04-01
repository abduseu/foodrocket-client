import { useEffect, useState } from "react";
import AdminDrawer from "./AdminDrawer";
import { axiosBase } from "../../hooks/useAxios";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axiosBase('/users')
            .then(res => { setUsers(res.data) })
    }, [])

    //change user role
    const handleApply = (e) => {
        e.preventDefault();
        const form = e.target
        const changeRole = {
            role: form.role.value
        }

        const idd = form.id.value   //collectedd from hidden input

        axiosBase.put(`/manage-users/${idd}`, changeRole)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'User role changed!',
                        'User role has beed changed!',
                        'success'
                    )
                    axiosBase('/users')
                        .then(res => { setUsers(res.data) })
                }
            })
    }

    //Delete user
    const handleDelete = (id) => {
        axiosBase.delete(`/manage-users/${id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'User has been removed!.',
                        'success'
                    );
                    axiosBase('/users')
                        .then(res => { setUsers(res.data) })
                }
            });
    }


    return (
        <div className="md:flex border">
            <AdminDrawer></AdminDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Manage Users</h3>
                        <div className="text-xl space-y-4">
                            <div>
                                {users.map((x, index) => (
                                    <div key={x._id} className="flex justify-between items-center my-4 md:px-10 mx-auto">
                                        <div className="md:flex items-center w-2/3">
                                            <div className="text-left">
                                                <div>
                                                    <h3 className="font-semibold text-sm">{index + 1}. {x.name} <span className="seco uppercase">[{x.role}]</span></h3>
                                                    <p className="text-sm"><span>{x.email}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-sm flex gap-2">
                                            <form onSubmit={handleApply} className="flex gap-2">
                                                <select name="role" defaultValue={x.role} className="select select-sm select-success w-full max-w-xs uppercase">
                                                    {/* <option disabled selected>{x.role}</option> */}
                                                    <option value="admin">Admin</option>
                                                    <option value="restaurant">Restaurant</option>
                                                    <option value="user">User</option>
                                                    <option value="fraud">Fraud</option>
                                                </select>
                                                <input type="hidden" name="id" value={x._id} />
                                                <button className="btn btn-sm md:btn-sm text-white bg-prim btn-success">Apply</button>
                                            </form>
                                            <button onClick={() => handleDelete(x._id)} className="btn btn-sm md:btn-sm text-white bg-red-600 btn-error">X</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;