import logo from '../../assets/logo.png'
import { Link, Outlet } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProviders';
import useAdmin from '../../api/useAdmin';
import useInstructor from '../../api/useInstructor';


const Sidebar = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user.photoURL);
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    // const userRole = 'admin';
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(userRole);
    return (
        <div className="drawer lg:drawer-open container mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="flex items-center justify-between bg-base-200 lg:hidden p-2">
                    <label htmlFor="my-drawer-2" className="p-5 drawer-button "><AiOutlineMenuFold size={24} className="active:text-white text-[#F8A33C] font-bold"></AiOutlineMenuFold> </label>
                    <img src={logo} alt="" className="h-14" />
                </div>
                <div className="bg-slate-200 min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <img src={logo} alt="" />
                    {isAdmin ? (
                        <>
                            <li><Link to='/dashboard/manage-classes'>Manage Classes</Link></li>
                            <li><Link to='/dashboard/manage-users'>Manage Users</Link></li>
                        </>
                    ) : isInstructor ? (
                        <>
                            <li><Link to='/dashboard/add-classes'>Add A Class</Link></li>
                            <li><Link to='/dashboard/my-classes'>My Classes</Link></li>
                        </>
                    ) : (
                        <>
                            <li><a>student</a></li>
                        </>
                    )}

                    <div className="divider mt-10"></div>
                    <li><Link to='/'>Home</Link></li>
                    <div className="divider"></div>
                    <li><Link className=' mt-20' to=''>Profile</Link></li>
                    <li><button onClick={handleLogOut} className='' to=''>Logout</button></li>
                    <li><Link className='' to=''>Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;