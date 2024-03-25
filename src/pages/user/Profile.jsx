import useAuth from "../../hooks/useAuth";
import UserDrawer from "./UserDrawer";

const Profile = () => {
    const {user} = useAuth()

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;