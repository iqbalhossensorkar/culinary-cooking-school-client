import { useEffect } from 'react';
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Instructors = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/instructor`)
            .then(res => res.json())
            .then(data => {
                setInstructor(data)
            })
            .catch(error => {
                console.log('Error data', error);
            })
    }, [])
    return (
        <div className="w-9/12 mx-auto">
            <div className="form-control grid justify-center mb-16 ">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered input-error" />
                    <button className="btn btn-square bg-transparent border-error">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="text-center mb-16 ">
                <p className="uppercase lg:text-3xl font-sans font-bold mb-2 text-[#8C0D43]">Find The Best Instructors Here</p>
                <Typewriter
                    options={{
                        strings: ["Become the best Chef and show everyone, how you can do anything", "Join our best classes and get exclusive offers"],
                        autoStart: true,
                        loop: true,
                        delay: 50
                    }}
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
                {
                    instructor.map(trainer =>
                        <div key={trainer._id}>
                            <div className="card lg:card-side lg:h-48 bg-base-100 border hover:shadow-lg transition">
                                <figure><img src={trainer.image} alt="Movie" className="h-48 object-cover w-80 lg:h-48 lg:w-48 transition hover:scale-125" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{trainer.name}</h2>
                                    <p>Email: {trainer.email}</p>
                                    <div className="card-actions justify-end">
                                        <div className="bg-white btn mt-5 mb-3 text-black hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-red-300 border-red-400 font-bold">Show Classes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='text-center mb-20'>
                <button  className="bg-black btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">Show More</button>
            </div>
        </div>
    );
};

export default Instructors;