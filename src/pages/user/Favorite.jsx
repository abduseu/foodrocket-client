import useFavorite from "../../hooks/useFavorite";
import UserDrawer from "./UserDrawer";

const Favorite = () => {
    const [favorite] = useFavorite()
    return (
        <div className="md:flex border">
            <UserDrawer></UserDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">My Favorite</h3>
                        <div className="space-y-1">
                        {
                            favorite.map((x, index) =>
                                <div key={x._id} className="flex justify-between items-center my-4">
                                    <div className="md:flex items-center">
                                        <div>
                                            <h3 className="font-bold text-xl">{index + 1}. {x.restaurantName}</h3>
                                        </div>
                                    </div>
                                    <div className="grid grid-flow-col items-center gap-4 text-right">
                                        {/* <button onClick={() => handleDelete(x._id)} className="btn btn-xs btn-circle btn-error text hover:bg-black">X</button> */}
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

export default Favorite;