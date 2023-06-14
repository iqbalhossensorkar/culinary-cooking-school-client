import Typewriter from 'typewriter-effect';
import useClass from '../api/useClass';
import ClassesCard from '../Components/Classes/ClassesCard';
// import ClassesCard from '../Components/Classes/ClassesCard';

const Classes = () => {
    const [classes] = useClass();
    const approved = classes.filter(item => item.status == 'approve')
    console.log(approved);


    return (
        <div className="w-9/12 mx-auto">
            <div className="form-control grid justify-end mb-16 ">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered input-warning" />
                    <button className="btn btn-square bg-transparent border-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="text-center mb-16 ">
                <p className="uppercase lg:text-3xl font-sans font-bold mb-2 text-[#8C0D43]">Find The Best Classes</p>
                <Typewriter
                    options={{
                        strings: ["Become the best Chef and show everyone, how you can do anything", "Join our best classes and get exclusive offers"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-10">
                {approved.map(item => <ClassesCard key={item._id} item={item} />)}
            </div>
        </div>
    );
};

export default Classes;