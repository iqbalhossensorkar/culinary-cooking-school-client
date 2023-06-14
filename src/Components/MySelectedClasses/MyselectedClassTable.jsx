/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaPaypal, FaTrashAlt } from "react-icons/fa";
import DeleteModal from "../AllClasses/DeleteModal";
import { toast } from "react-hot-toast";
import { deleteClass } from "../../api/classes";
import { Link } from "react-router-dom";

const MyselectedClassTable = ({ addedClass, index, refetch }) => {
    // console.log(addedClass);

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }
    const modalHandler = id => {
        console.log(id)
        deleteClass(id)
          .then(data => {
            console.log(data)
            refetch()
            toast.success('Room deleted')
          })
          .catch(err => console.log(err))
        closeModal()
      }
    
    

    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={addedClass?.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{addedClass?.title}</td>
                <td>${addedClass?.price}</td>
                <td>
                    <button className="btn btn-error btn-xs" onClick={() => setIsOpen(true)}><FaTrashAlt className="text-white" /></button>
                </td>
                <td>
                    <Link to='/dashboard/payment'><button className="btn btn-success btn-xs" ><FaPaypal className="text-white" /></button></Link>
                </td>
            </tr>
            <DeleteModal isOpen={isOpen} id={addedClass._id} closeModal={closeModal} modalHandler={modalHandler}  />
        </>
    );
};

export default MyselectedClassTable;