import logo from '../../assets/logo.png'
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";


const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open container mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="flex items-center justify-between bg-base-200 lg:hidden p-2">
                    <label htmlFor="my-drawer-2" className="p-5 drawer-button "><AiOutlineMenuFold size={24} className="active:text-white text-[#F8A33C] font-bold"></AiOutlineMenuFold> </label>
                    <img src={logo} alt="" className="h-14" />
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <img src={logo} alt="" /> 
                    <li><Link to='/dashboard/add-class'>Add A Class</Link></li>
                    <li><a>Sidebar Item 2</a></li>
                    <Link to='/'>Home</Link>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;