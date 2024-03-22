import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";


const Header = () => {
    const user = true;

    //Navlink
    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart" className="flex">Cart</Link></li>
        <li><Link to="/login"><button className="navbtn rounded-lg">Login</button></Link></li>
    </>
    const linksPrivate = <>
        <li className="whitespace-nowrap">{user.displayName}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/cart" className="flex">Cart<sup className="text-xs text-red-600">{5}</sup></Link></li>
        <li><Link>Signout</Link></li>
    </>

    return (
        <div className="py-4">
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black w-52">
                            {user ?
                                <>
                                    {linksPrivate}
                                    {/* <div className="dropdown dropdown-end dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded">
                                            <li className="whitespace-nowrap">{user.displayName}</li>
                                            <li><Link to={'/manage'}>Manage</Link></li>
                                            <li><Link to={'/orders'}>Orders</Link></li>
                                            <li><Link>Signout</Link></li>
                                        </ul>
                                    </div> */}
                                </> :
                                links}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-bold text-xl flex items-center gap-2"><IoFastFood /> FoodRocket</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <FaShoppingBag /><sup className="text-xs seco">{5}</sup>
                    </button>
                </div>
            </div>
            <div>
                <form className="bg-white flex rounded-full">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" name="search" placeholder="Search Restaurant" className="focus:outline-none rounded-full w-full" />
                </form>
            </div>


            {/* Logo & Button */}
            {/* <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-2">
                <div>
                    <Link to="/" className="text-3xl font-bold flex items-center">Speedy</Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`flex items-center gap-4 md:gap-8 text-lg font-semibold list-none uppercase`}>
                            {user ?
                                <>
                                    {linksPrivate}
                                    <div className="dropdown dropdown-end dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded">
                                            <li className="whitespace-nowrap">{user.displayName}</li>
                                            <li><Link to={'/manage'}>Manage</Link></li>
                                            <li><Link to={'/orders'}>Orders</Link></li>
                                            <li><Link>Signout</Link></li>
                                        </ul>
                                    </div>
                                </> :
                                links}
                        </ul>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Header;