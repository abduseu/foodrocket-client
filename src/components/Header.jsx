import { Link, NavLink } from "react-router-dom";
import { FaGlobeAmericas, FaRegHeart, FaRegNewspaper, FaShoppingBag } from "react-icons/fa";
import { IoFastFood, IoLogInOutline } from "react-icons/io5";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useCart from "../hooks/useCart";
import useFavorite from "../hooks/useFavorite";

const Header = () => {
    const { user, logOut } = useAuth()
    const { role } = useAxios(`/users/${user?.email}`)
    // const { pathname } = useLocation()
    const [cart] = useCart()
    const [favorite] = useFavorite()

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
        <li><Link to="/login"><IoLogInOutline />Login to your account!</Link></li>
        <li><Link to="/signup"><FaRegNewspaper />Create an Account</Link></li>
    </>
    const linksPrivate = <>
        <li className="whitespace-nowrap flex-nowrap flex-row items-center py-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="rounded-full">
                    <img src={user?.photoURL} />
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
        <header className="bg-prim text">
            <div className="xl:container mx-auto">
                <div className="mx-5">
                    <div>
                        <div className="navbar px-0">
                            <div className="navbar-start">
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-prim2 text-black rounded-lg min-w-60">
                                        {user ? linksPrivate : links}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-center">
                                <Link to={'/'} className="font-bold text-2xl flex items-center gap-2"><IoFastFood /> FoodRocket</Link>
                            </div>
                            <div className="navbar-end">
                                {user && role === undefined && <h3 className="loading loading-spinner loading-sm"></h3>}
                                {role === 'user' &&
                                    <>
                                        <Link to={'/favorite'}>
                                            <button className="btn btn-ghost btn-circle">
                                                <FaRegHeart /><sup className="text-xs">{favorite.length}</sup>
                                            </button>
                                        </Link>
                                        <Link to={'/cart'}>
                                            <button className="btn btn-ghost btn-circle">
                                                <FaShoppingBag /><sup className="text-xs">{cart.length}</sup>
                                            </button>
                                        </Link>
                                    </>
                                }
                                {role === 'restaurant' &&
                                    <Link to={'/received-orders'}>
                                        <button className="btn btn-ghost btn-circle">
                                            <FaGlobeAmericas /><sup className="text-xs seco">{ }</sup>
                                        </button>
                                    </Link>
                                }
                                {role === 'rider' &&
                                    <Link to={'/task'}>
                                        <button className="btn btn-ghost btn-circle">
                                            <FaGlobeAmericas /><sup className="text-xs seco">{ }</sup>
                                        </button>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {(pathname == '/' || pathname.startsWith('/restaurants') || pathname.startsWith('/service')) && } */}
            <div className="bg-black text">
                <div className="xl:container mx-auto">
                    <div className="mx-5 mb-6 flex justify-between items-center">
                        <ul className="flex gap-8 p-4">
                            <NavLink to={'/'}><li>Restaurant</li></NavLink>
                            {/* <NavLink to={'/service'}><li>Service</li></NavLink> */}
                            <NavLink to={`/${role}`}><li>Dashboard</li></NavLink>
                        </ul>
                        <div>
                            <form className="bg-white flex rounded-lg">
                                <button className="btn btn-ghost btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="black"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                                <input type="text" name="search" placeholder="Search" className="focus:outline-none rounded-lg w-full prim" autoComplete="off" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;