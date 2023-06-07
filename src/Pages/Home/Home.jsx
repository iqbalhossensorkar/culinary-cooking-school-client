import MouseParticles from 'react-mouse-particles'
import Header from '../../Components/HomePage/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
            
        </div>
    );
};

export default Home;