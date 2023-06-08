import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import './BrightStudents.css'
import first from '../../assets/bright-students/student-1.jpg'
import second from '../../assets/bright-students/student-2.jpg'
import third from '../../assets/bright-students/student-3.jpg'
import fourth from '../../assets/bright-students/student-4.jpg'
import fifth from '../../assets/bright-students/student-5.jpg'
import six from '../../assets/bright-students/student-6.jpg'
import seven from '../../assets/bright-students/student-7.jpg'
import eight from '../../assets/bright-students/student-8.jpg'
import nine from '../../assets/bright-students/student-9.jpg'
import ten from '../../assets/bright-students/student-10.jpg'
import eleven from '../../assets/bright-students/student-11.jpg'
import twelve from '../../assets/bright-students/student-12.jpg'
import thirt from '../../assets/bright-students/student-13.jpg'
import fourt from '../../assets/bright-students/student-14.jpg'
import fift from '../../assets/bright-students/student-15.jpg'
import sixt from '../../assets/bright-students/student-16.jpg'
import sevent from '../../assets/bright-students/student-17.jpg'
import eighth from '../../assets/bright-students/student-18.jpg'
import nineth from '../../assets/bright-students/student-19.jpg'
import twent from '../../assets/bright-students/student-20.jpg'
import twone from '../../assets/bright-students/student-21.jpg'
import twtwo from '../../assets/bright-students/student-22.jpg'
import twthr from '../../assets/bright-students/student-23.jpg'

const BrightStudents = () => {
    // const options = {
    //     size: 180,
    //     minsize: 20,
    //     gutter: 0,
    //     provideProps: true,
    //     numCols: 5,
    //     fringeWidth: 160,
    //     yRadius: 130,
    //     xRadius: 182,
    //     cornerRadius: 20,
    //     showGuides: false,
    //     compact: false,
    //     gravitation: 5
    // }
    return (
        <div className="mt-20 w-2/3 mx-auto">
            <p className='text-center text-5xl font-semibold text-[#F8A33C]'>Students Gallery</p>
            <p className='text-center text-gray-400 mt-3 font-medium'>Learn From Our Best Teachers and Become the Masterchef</p>
            <BubbleUI
                // options={options}
                className="myBubbleUI mt-20">
                <img src={first} alt="" className="mask mask-circle" />
                <img src={third} alt="" className="mask mask-circle" />
                <img src={fourth} alt="" className="mask mask-circle" />
                <img src={second} alt="" className="mask mask-circle" />
                <img src={fifth} alt="" className="mask mask-circle" />
                <img src={six} alt="" className="mask mask-circle" />
                <img src={seven} alt="" className="mask mask-circle" />
                <img src={eight} alt="" className="mask mask-circle" />
                <img src={nine} alt="" className="mask mask-circle" />
                <img src={ten} alt="" className="mask mask-circle" />
                <img src={eleven} alt="" className="mask mask-circle" />
                <img src={twelve} alt="" className="mask mask-circle" />
                <img src={fourt} alt="" className="mask mask-circle" />
                <img src={fift} alt="" className="mask mask-circle" />
                <img src={sixt} alt="" className="mask mask-circle" />
                <img src={sevent} alt="" className="mask mask-circle" />
                <img src={eighth} alt="" className="mask mask-circle" />
                <img src={nineth} alt="" className="mask mask-circle" />
                <img src={twent} alt="" className="mask mask-circle" />
                <img src={twone} alt="" className="mask mask-circle" />
                <img src={twtwo} alt="" className="mask mask-circle" />
                <img src={twthr} alt="" className="mask mask-circle" />
                <img src={thirt} alt="" className="mask mask-circle" />
            </BubbleUI>
        </div>
    );
};

export default BrightStudents;