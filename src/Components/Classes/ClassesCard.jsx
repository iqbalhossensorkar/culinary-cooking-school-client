/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../api/useCart";


const ClassesCard = ({ item }) => {
    const { _id, image, instructor, price, seats, title } = item;   
    const { user, role } = useContext(AuthContext)
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(role, user);
    // console.log(item);
    
    const handleAddClass = item => {
        if (user && user?.email) {
            console.log(item);
            const addedClass = {classId: _id, image, price, seats, title, email: user.email, name: user.displayName}
            fetch(`${import.meta.env.VITE_API_URL}/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('You successfully added this class')
                    refetch();
                }
            })
        }
        else {
            toast.error('Please Login first')
            navigate('/login', {state: {from: location}})
        }
    }

    return (
        <div>
            <div className="card w-96 border ">
                <figure><img src={image} alt="Class Images" className="object-cover w-full h-56 hover:scale-125 transition" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className="mb-4">Instructor: {instructor.name}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline hover:bg-[#8A7543] cursor-pointer hover:text-white">Available Seats: {seats}</div>
                        <div className="badge bg-[#F8A33D] font-bold text-[#8C0E43] cursor-pointer">Price: ${price}</div>
                    </div>
                    <button onClick={() => handleAddClass(item)} className="bg-gray-300 py-3 hover:rounded-full disabled:cursor-no-drop disabled:scale-100 disabled:border-none disabled:text-gray-400 disabled:rounded-none disabled:bg-gray-100 hover:border-2 mt-3 text-[#6C2612] border-warning transition hover:scale-95 active:scale-100 active:bg-gray-400 font-bold " disabled={role === 'instructor' || role === 'admin' || seats === 0}>Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;