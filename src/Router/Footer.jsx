
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 lg:justify-items-center">
                <div className="lg:border-r border-[#6C2612] lg:pr-28">
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className="lg:border-r border-[#F8A33C] lg:pr-28">
                    <span className="text-[#F8A33C] font-bold text-lg">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
                <div className="">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 footer-center mt-20 border-t border-[#7C652E] text-base-content">
                <div>
                    <p className="font-semibold text-slate-400">Copyright © 2023 - All right reserved by <strong>CSCA</strong></p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;