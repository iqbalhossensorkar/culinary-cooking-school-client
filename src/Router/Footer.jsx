import logo from '../assets/logo.png'
import { BsArrowRightCircle, BsPhone } from 'react-icons/bs'

import FooterImage from '../Components/FooterImage';
import Social from '../Components/Social';
const Footer = () => {
    return (
        <div>
            <div className="lg:w-2/3 mx-auto">
            <footer className="footer p-10 lg:justify-items-center">
                <div className="lg:border-r border-[#6C2612] lg:pr-28 lg:h-56">
                    <img src={logo} alt="" className='w-40' />
                    <p className='font-bold'>Do you have questions <br />
                        and want to contact us? <br />
                        <span className='text-[#F8A33C]'>Call or visit us.</span></p>
                    <div className='text-[#8C0D43] font-bold text-xl flex items-center hover:text-[#7C652E] cursor-pointer'><BsPhone />+880 1955-948768</div>
                    <p className='text-gray-400'>Dhaka-1207, Bangladesh</p>
                </div>
                <div className="lg:border-r border-[#F8A33C] lg:pr-28 lg:h-56">
                    <span className="text-[#F8A33C] font-bold text-lg">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="">
                    <div className='flex items-center gap-5'>
                        <Social />
                    </div>
                    <p className='mt-10 text-lg font-semibold hover:lg:shadow-lg transition lg:p-3'>We’re always in search for talented and <br /> motivated people. Don’t be <br /> shy introduce yourself! <div className='w-10 hover:shadow-xl shadow-black rounded-full hover:scale-110 transition'>
                        <BsArrowRightCircle size={40} className='text-[#8C0D43]'/>
                    </div></p>
                    
                </div>
            </footer>
            <footer className="footer px-10 py-4 footer-center lg:mt-20 border-t border-[#7C652E] text-base-content">
                <div>
                    <p className="font-semibold text-slate-400">Copyright © 2023 - All right reserved by <strong>CSCA</strong></p>
                </div>
            </footer>
            </div>
            <FooterImage />
        </div>
    );
};

export default Footer;