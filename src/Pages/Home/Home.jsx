import MouseParticles from 'react-mouse-particles'
import Header from '../../Components/HomePage/Header';
import BrightStudents from '../../Components/HomePage/BrightStudents';
import AboutStats from '../../Components/HomePage/AboutStats';
import PopularInstructors from '../../Components/HomePage/PopularInstructors';

const Home = () => {
    return (
        <div>
            <Header />
            <PopularInstructors />
            <BrightStudents />
            <AboutStats />
            <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
        </div>
    );
};

export default Home;