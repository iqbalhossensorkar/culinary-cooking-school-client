/* eslint-disable react/prop-types */


const AllUsersTable = ({ singleUser, index, handleMakeInstructor, handleMakeAdmin }) => {
    // console.log(singleUser);
    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{singleUser?.name}</td>
                <td>{singleUser?.email}</td>
                <td>
                    <button onClick={() => handleMakeInstructor(singleUser._id)} className="btn btn-warning btn-xs">Make Instructor</button>
                </td>
                <td>
                    <button onClick={() => handleMakeAdmin(singleUser)} className="btn btn-outline btn-xs" disabled={singleUser.role == 'admin'}>Make Admin</button>
                </td>
            </tr>
        </tbody>
    );
};

export default AllUsersTable;