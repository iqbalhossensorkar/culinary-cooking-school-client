/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const ClassesCard = ({ item, handleAddToCart }) => {
    const {user, role} = useContext(AuthContext)
    console.log(role, user);
    // console.log(item);
    const { image, instructor, price, seats, title } = item;
    
    return (
        <div>
            <div className="card w-96 border ">
                <figure><img src={image} alt="Class Images" className="object-cover w-full h-56 hover:scale-125 transition" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">Popular</div>
                    </h2>
                    <p className="mb-4">Instructor: {instructor.name}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline hover:bg-[#8A7543] cursor-pointer hover:text-white">Available Seats: {seats}</div>
                        <div className="badge bg-[#F8A33D] font-bold text-[#8C0E43] cursor-pointer">Price: ${price}</div>
                    </div>
                    <button onClick={() => handleAddToCart(item)} className="bg-gray-300 py-3 hover:rounded-full hover:border-2 mt-3 text-[#6C2612] border-warning transition hover:scale-95 active:scale-100 active:bg-gray-400 font-bold ">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;