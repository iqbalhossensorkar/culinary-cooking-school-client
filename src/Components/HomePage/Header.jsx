import ParticlesBg from 'particles-bg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/slide-1.png'
import slider2 from '../../assets/slide-2.png'
import slider3 from '../../assets/slide-3.png'
import { } from "swiper";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container mx-auto">
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} >
                <div className="lg:flex items-center">
                    <div data-aos="fade-right" className="lg:ml-10 p-4 lg:text-left">
                        <p className="font-black lg:text-5xl text-3xl"><span className="text-[#F8A33C]">Learn Something New</span> Join to our Classes <span className="text-[#7C652E]">towards vision</span></p>
                        <p data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="2000" className="text-lg mt-10 font-semibold text-gray-500">With the Courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diver</p>
                        <div data-aos="flip-right" data-aos-delay="100" data-aos-duration="2000">
                            <div className="bg-black btn mt-5 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">View Classes</div>
                        </div>
                    </div>
                    <img src={slider1} className="lg:h-[600px] w-full" data-aos="fade-down-left" />
                    <ParticlesBg type="polygon" bg={true} />
                </div>
                <div className="lg:flex items-center">
                    <div data-aos="fade-right" className="lg:ml-10 p-4 lg:text-left">
                        <p className="font-black lg:text-5xl text-3xl"><span className="text-[#F8A33C]">Become The Master</span> Show your skills to your <span className="text-[#7C652E]">School</span></p>
                        <p data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="2000" className="text-lg mt-10 font-semibold text-gray-500">With the Courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diver</p>
                        <div data-aos="flip-right" data-aos-delay="100" data-aos-duration="2000">
                            <div className="bg-black btn mt-5 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">Join Class</div>
                        </div>
                    </div>
                    <img src={slider2} className="lg:h-[600px] w-full" data-aos="fade-down-left" />
                    <ParticlesBg type="color" bg={true} />
                </div>
                <div className="lg:flex items-center">
                    <div data-aos="fade-right" className="lg:ml-10 p-4 lg:text-left">
                        <p className="font-black lg:text-5xl text-3xl"><span className="text-[#F8A33C]">Empowering  students</span> from small to age <span className="text-[#7C652E]">towards vision</span></p>
                        <p data-aos="fade-up"
                            data-aos-delay="50"
                            data-aos-duration="2000" className="text-lg mt-10 font-semibold text-gray-500">With the Courage, Confidence, Creativity and Compassion to make their Unique Contribution in a Diver</p>
                        <div data-aos="flip-right" data-aos-delay="100" data-aos-duration="2000">
                            <div className="bg-black btn mt-5 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">Enrole Now</div>
                        </div>
                    </div>
                    <img data-aos="fade-up-left"  src={slider3} className="lg:h-[600px] w-full" />
                    <ParticlesBg type="ball" bg={true} />
                </div>
            </Carousel>

        </div>
    );
};

export default Header;