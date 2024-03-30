import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
        <li className="py-4 max-sm:py-0 max-sm:text-sm sm:px-1"><NavLink to="/">Home</NavLink></li>
        <li className="py-4 max-sm:py-0 max-sm:text-sm sm:px-1"><NavLink to="/listed">Listed Books</NavLink></li>
        <li className="py-4 max-sm:py-0 max-sm:text-sm sm:px-1"><NavLink to="/read">Pages to Read</NavLink></li>
        <li className="py-4 max-sm:py-0 max-sm:text-sm sm:px-1"><NavLink to="/top">Top Rated</NavLink></li>
        <li className="py-4 max-sm:py-0 max-sm:text-sm sm:px-1"><NavLink to="/this_year">Large</NavLink></li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start max-sm:w-24 max-sm:mr-8">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-2xl">
                        {links}
                    </ul>
                </div>
                <a className="text-4xl font-bold max-sm:text-lg">Book Vibe</a>
            </div>
            <div className="navbar-center max-sm:w-[100px] lg:flex max-sm:mr-8 max-sm:w-[350px]">
                <ul className="menu menu-horizontal px-1 text-2xl max-sm:text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end max-sm:hidden">
                <a className=" max-sm:btn max-sm:bg-[#23BE0A] text-2xl max-sm:text-lg  max-sm:px-4 py-3  max-sm:font-normal font-bold text-white bg-[#23BE0A] px-8 py-4 rounded-lg mr-4">Sigh In</a>
                <a className=" max-sm:btn max-sm:bg-[#59C6D2] text-2xl max-sm:text-lg  max-sm:px-4 py-3  max-sm:font-normal font-bold text-white bg-[#59C6D2] px-8 py-4 rounded-lg">Sigh Up</a>
            </div>
        </div>
    );
};

export default Header;