import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { IoFastFood, IoLogInOutline } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const Header = () => {
    const { user, logOut, loading } = useAuth()
    const { role } = useAxios(`/users/${user?.email}`)

    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log('Signout Successful!')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    //Navlink
    const links = <>
        <li><a className="font-bold text-xl flex items-center gap-2"><IoFastFood /> FoodRocket</a></li>
        <li><Link to="/login"><IoLogInOutline />Login to your account!</Link></li>
        <hr />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup"><button className="navbtn rounded-lg">Create an Account</button></Link></li>
    </>
    const linksPrivate = <>
        <li><a className="font-bold text-xl flex items-center gap-2"><IoFastFood /> FoodRocket</a></li>
        <li className="whitespace-nowrap flex-row items-center">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src={!loading ? user?.photoURL : ''} />
                </div>
            </label>
            <div>
                {user?.displayName}
                <br />
                {user?.email}
            </div>
        </li>
        <hr />
        <li><Link to="/">Home</Link></li>
        <li><Link to={`/${role}`}>Dashboard</Link></li>
        <li><Link onClick={handleSignout}>Signout</Link></li>
    </>

    return (
        <div className="py-4">
            <div className="navbar px-0 text">
                <div className="navbar-start">
                    <div className="dropdown">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="drawer-button">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </div>
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-prim text">
                                {/* Sidebar content here */}
                                {user ? linksPrivate : links}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="font-bold text-xl flex items-center gap-2"><IoFastFood /> FoodRocket</a>
                </div>
                <div className="navbar-end">
                    {role === 'user' ?
                        <Link to={'/cart'}>
                            <button className="btn btn-ghost btn-circle">
                                <FaShoppingBag /><sup className="text-xs seco">{5}</sup>
                            </button>
                        </Link> :
                        <h3 className="loading loading-spinner loading-sm"></h3>
                    }
                </div>
            </div>
            <div className="pb-4">
                <form className="bg-white flex rounded-lg">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <input type="text" name="search" placeholder="Search Restaurant" className="focus:outline-none rounded-lg w-full" />
                </form>
            </div>
        </div>
    );
};

export default Header;