import image from '../assets/footer.jpg'
const FooterImage = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className="hero h-96 bg-cover" style={{ backgroundImage: `url(${image})` }}>
            </div>
        </div>
    );
};

export default FooterImage;