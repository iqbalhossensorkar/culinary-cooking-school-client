import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/error-page.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (

        <div className="flex items-center justify-center h-screen">
            <div data-aos="fade-zoom-in">
                <Lottie animationData={groovyWalkAnimation} loop={true} className="h-96" />
                <div className="text-center hover:scale-105 transition active:scale-95">
                <Link to='/' className="bg-black text-white hover:text-black hover:border-2 px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">back</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;