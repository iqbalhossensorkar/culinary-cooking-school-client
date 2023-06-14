import { useEffect } from "react";
import { useState } from "react";

const PopularInstructors = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/instructor`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const remainig = data.slice(0, 6)
                // console.log(remainig);
                setInstructor(remainig)
            })
            .catch(error => {
                console.log('Error data', error);
            })
    }, [])
    return (
        <div className="w-2/3 mx-auto mt-20 lg:mt-32">
            <p className='text-center text-5xl font-semibold text-[#F8A33C]'>Popular Instructors</p>
            <p className='text-center text-gray-400 mt-3 font-medium mb-20'>Learn From Our Best Teachers and Become the Masterchef</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    instructor.map(trainer =>
                        <div key={trainer._id}>
                            <div className="card lg:card-side lg:h-48 bg-base-100 border hover:shadow-lg transition">
                                <figure><img src={trainer.image} alt="Movie" className="h-48 object-cover w-80 lg:h-48 lg:w-48 transition hover:scale-125" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{trainer.name}</h2>
                                    <p>Email: {trainer.email}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-error text-white">Popular</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='text-center mb-20 mt-10'>
                <button className="bg-black btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold">Show More</button>
            </div>
        </div>
    );
};

export default PopularInstructors;