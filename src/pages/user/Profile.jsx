import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios, { axiosBase } from "../../hooks/useAxios";
import UserDrawer from "./UserDrawer";

const Profile = () => {
    const { user } = useAuth()
    const userData = useAxios(`/users/${user.email}`)


    const handleUpdateAdress = (e) => {
        const userInfo = {
            name: e.target.name.value,
            userAddress: e.target.userAddress.value
        }

        axiosBase.put(`/manage-users/${userData._id}`, userInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire(
                        'Profile Updated!',
                        'Profile has been updated',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="md:flex border">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                    <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">User Profile</h3>
                        <div className="text-xl space-y-4">
                            <div className="flex justify-center">
                                <img src={user.photoURL} className="rounded-full max-w-xs" />
                            </div>
                            <h3>Name: <span>{user.displayName}</span> </h3>
                            <h3>Email: <span>{user.email}</span> </h3>
                            <form onSubmit={handleUpdateAdress}>
                                <div>
                                    <h3>Address: <span>{userData?.userAddress}</span></h3>
                                    <div className="flex justify-center gap-4">
                                        <input type="text" name="name" placeholder="Update Name" defaultValue={userData?.name} className="input input-sm input-bordered mt-4 w-1/3" />
                                        <input type="text" name="userAddress" placeholder="Update Address" defaultValue={userData?.userAddress} className="input input-sm input-bordered mt-4 w-1/3" />
                                    </div>
                                    <button className="btn btn-prim hover:bg-black text-white block mx-auto mt-4">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;