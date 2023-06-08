import { PacmanLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
            className='
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      '
        >
            <PacmanLoader size={100} color="#F8A33C" />
        </div>
    );
};

export default Loader;