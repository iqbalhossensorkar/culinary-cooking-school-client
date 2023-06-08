import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user.photoURL);
    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='bg-transparent text-[#F8A33C]  focus:bg-[#F8A33C] focus:text-white font-bold active:scale-90'>Home</Link></li>
                            <li><Link to='/instructors' className='bg-transparent text-[#6F2A16]  focus:bg-[#6F2A16] focus:text-white font-bold active:scale-90'>Instructors</Link></li>
                            <li><Link to='/classes' className='bg-transparent text-[#7C652E]  focus:bg-[#7C652E] focus:text-white font-bold active:scale-90'>Classes</Link></li>
                            {user && <li><Link to='/dashboard' className='bg-transparent text-[#8C0D43]  focus:bg-[#8C0D43] focus:text-white font-bold active:scale-90'>Dashboard</Link></li>}
                        </ul>
                    </div>
                    <Link><img src={logo} alt="" className='lg:h-24' /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='bg-transparent text-[#F8A33C]  focus:bg-[#F8A33C] focus:text-white font-bold active:scale-90'>Home</NavLink></li>
                        <li><NavLink to='/instructors' className='bg-transparent text-[#6F2A16]  focus:bg-[#6F2A16] focus:text-white font-bold active:scale-90'>Instructors</NavLink></li>
                        <li><NavLink to='/classes' className='bg-transparent text-[#7C652E]  focus:bg-[#7C652E] focus:text-white font-bold active:scale-90'>Classes</NavLink></li>
                       {user &&  <li><NavLink to='/dashboard' className='bg-transparent text-[#8C0D43]  focus:bg-[#8C0D43] focus:text-white font-bold active:scale-90'>Dashboard</NavLink></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <>
                            <div className='mr-5'>
                                <img src={user.photoURL} alt="avatar"  className="rounded-full btn-circle h-9 w-9 " />
                            </div>
                            <div className="bg-black btn lg:btn-sm btn-xs text-white hover:text-black hover:border-2 transition rounded hover:bg-transparent border-red-400 lg:font-bold" onClick={handleLogOut}>logout</div>
                        </> :
                        <>
                            <Link className="bg-black btn btn-sm text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold" to='/login'>Login</Link>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;