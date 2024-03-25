import RestaurantDrawer from "./RestaurantDrawer";

const MenuAdd = () => {
    return (
        <div className="md:flex border">
            <RestaurantDrawer></RestaurantDrawer>
            <div className="bg-cover bg-center w-full">
                <div className="flex justify-center items-center">
                <div className="text-center p-6 w-full">
                        <h3 className="text-2xl font-semibold mb-6 uppercase">Add Menu</h3>
                        <div className="text-xl space-y-4">
                            content
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuAdd;