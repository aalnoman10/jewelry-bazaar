import { Link } from "react-router-dom";
import { BiUserCircle } from 'react-icons/bi';

const NavBar = () => {

    const list = <>
        <Link className="font-semibold px-2" to={'/'}>Home</Link>
        <Link className="font-semibold px-2" to={'/all-jewelry'}>All jewelry</Link>
        <Link className="font-semibold px-2" to={'/my-jewelry'}>My Jewelry</Link>
        <Link className="font-semibold px-2" to={'/add-jewelry'}>Add Jewelry</Link>
        <Link className="font-semibold px-2" to={'/blogs'}>Blogs</Link>
    </>

    const user = false; //todo: user hard coded

    return (
        <div className="navbar opacity-50 bg-black sticky top-0 text-slate-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">jewelryBazaar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {list}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link to={"/profile"} className="bg-transparent hover:bg-transparent text-slate-100"><BiUserCircle title="Login" size={30} /></Link>
                        :
                        <Link to={"/login"} className=""><BiUserCircle title="name" size={30} /></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;