/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyClassesTable = ({ item }) => {
    // console.log(item);
    const { _id, image, instructor, title, status, feedback } = item;

    return (
        <>
            <tr>
                <th></th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="food image" className="hover:scale-125 transition" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{title}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {instructor.name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{instructor.email}</span>
                </td>
                <td>
                    {status == 'approve' ? (<div className="badge badge-success">approved</div>) : status == 'deny' ? (<div className="badge badge-error">denied</div>) : (<div className="badge badge-warning">Pending</div>)}
                </td>
                <td>0</td>
                <th>
                    <p>{feedback}</p>
                </th>
                <th>
                    <Link to={`/dashboard/update-class/${_id}`} ><button className="btn btn-neutral btn-xs">Update</button></Link>
                </th>
            </tr >
        </>
    );
};

export default MyClassesTable;