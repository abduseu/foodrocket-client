import { Link } from "react-router-dom";

const RestaurantDrawer = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open h-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-prim drawer-button lg:hidden">Dashboard</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-6 w-80 min-h-full bg-green-50">
                        {/* Sidebar content here */}
                        <li className="font-semibold text-2xl mb-4 uppercase">Dashboard</li>
                        <li><Link to={'/restaurant'}>Restaurant Profile</Link></li>
                        <li><Link to={'/menu/add'}>Add Menu</Link></li>
                        <li><Link to={'/menu'}>Manage Menu</Link></li>
                        <li><Link to={'/received-orders'}>Received Orders</Link></li>
                        <li><Link to={'/donate-food'}>Donate Food</Link></li>
                        <li><Link to={'/placed-donations'}>Placed Donations</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default RestaurantDrawer;