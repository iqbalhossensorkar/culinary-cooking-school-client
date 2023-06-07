import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className='bg-transparent text-[#F8A33C]  focus:bg-[#F8A33C] focus:text-white font-bold active:scale-90'>Home</Link></li>
                            <li><Link to='/instructors' className='bg-transparent text-[#6F2A16]  focus:bg-[#6F2A16] focus:text-white font-bold active:scale-90'>Instructors</Link></li>
                            <li><Link to='/classes' className='bg-transparent text-[#7C652E]  focus:bg-[#7C652E] focus:text-white font-bold active:scale-90'>Classes</Link></li>
                            <li><Link to='/dashboard' className='bg-transparent text-[#8C0D43]  focus:bg-[#8C0D43] focus:text-white font-bold active:scale-90'>Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link><img src={logo} alt="" className='lg:h-24'/></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className='bg-transparent text-[#F8A33C]  focus:bg-[#F8A33C] focus:text-white font-bold active:scale-90'>Home</NavLink></li>
                        <li><NavLink to='/instructors' className='bg-transparent text-[#6F2A16]  focus:bg-[#6F2A16] focus:text-white font-bold active:scale-90'>Instructors</NavLink></li>
                        <li><NavLink to='/classes' className='bg-transparent text-[#7C652E]  focus:bg-[#7C652E] focus:text-white font-bold active:scale-90'>Classes</NavLink></li>
                        <li><NavLink to='/dashboard' className='bg-transparent text-[#8C0D43]  focus:bg-[#8C0D43] focus:text-white font-bold active:scale-90'>Dashboard</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <div className="avatar">
                        <div className="w-8 lg:w-12 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" className=''/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;