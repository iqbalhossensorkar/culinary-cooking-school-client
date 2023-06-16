/* eslint-disable react/prop-types */

import { useState } from "react";
import Modal from "./Modal";
import { toast } from "react-hot-toast";


const AllClassesTable = ({ singleClass, index, handleMakeApprove, handleMakeDeny }) => {
    const [feedbackText, setFeedbackText] = useState("");
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        setFeedbackText('');
    }

    function openModal() {
        setIsOpen(true)
    }

    const handleFeedbackTextChange = (event) => {
        setFeedbackText(event.target.value);
    };

    const handleSendFeedback = () => {
        // console.log('heloo');
        const sendFeedback = { classId: singleClass._id, feedback: feedbackText, }
        fetch(`${import.meta.env.VITE_API_URL}/class/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendFeedback),
        }
        )
            .then((res) => {
                console.log(res, 'responce');
                toast.success('Feedback sent successfully')
            }
            )
    };


    return (
        <>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{singleClass?.title}</td>
                <td>
                    <div>
                        <div className="font-bold">{singleClass.instructor && singleClass.instructor.name}</div>
                        <div className="text-sm opacity-50">{singleClass.instructor && singleClass.instructor.email}</div>
                    </div>
                </td>
                <td>{singleClass.seats}</td>
                <td>${singleClass.price}</td>
                <td>
                    {singleClass?.status == 'approve' ? (<div className="badge badge-success">approved</div>) : singleClass?.status == 'deny' ? (<div className="badge badge-error">denied</div>) : (<div className="badge badge-warning">Pending</div>)}
                </td>
                <td>
                    <button onClick={() => handleMakeApprove(singleClass._id)} className="btn btn-outline btn-xs" disabled={singleClass.status == 'approve' || singleClass.status === 'deny'}>Approve</button>
                </td>
                <td>
                    <button onClick={() => handleMakeDeny(singleClass._id)} className="btn btn-outline btn-xs" disabled={singleClass.status == 'approve' || singleClass.status === 'deny'}>Deny</button>
                </td>
                <td>
                    <button className="btn btn-outline btn-xs" onClick={() => setIsOpen(true)}>Feedback</button>
                </td>
            </tr>
            <Modal isOpen={isOpen} openModal={openModal} closeModal={closeModal} handleFeedbackTextChange={handleFeedbackTextChange} handleSendFeedback={handleSendFeedback} feedbackText={feedbackText} />
        </>
    );
};

export default AllClassesTable;