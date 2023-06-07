import { AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Social = () => {
    return (
        <>
            <div className='hover:ring-4 hover:ring-blue-500 hover:ring-opacity-50 rounded-full'><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle size={40} className='hover:scale-90 transition text-blue-500' />
            </a></div>
            <div className='hover:ring-4 hover:ring-blue-700 hover:ring-opacity-50 rounded-full'><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <BsFacebook size={36} className='hover:scale-90 transition text-blue-700' />
            </a></div>

            <div className='hover:ring-4 hover:ring-[#F7A200] hover:ring-opacity-50 rounded-full'><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <AiFillGoogleCircle size={40} className='hover:scale-90 transition text-[#F7A200]' />
            </a></div>
        </>
    );
};

export default Social;

