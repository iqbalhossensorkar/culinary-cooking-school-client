import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Router/Footer";

const Main = () => {
    return (
        <div>
            <div className="lg:w-2/3 mx-auto">
            <Navbar />
            </div>
            <div className="min-h-screen">
            <Outlet />
            </div>
            <div className="lg:w-2/3 mx-auto">
                <Footer />
            </div>
        </div>
    );
};

export default Main;