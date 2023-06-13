/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const MyClassesTable = ({ item }) => {
    console.log(item);
    const { image, instructor, price, seats, title } = item;
    return (
        <tbody>
            <tr>
                <th></th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="food image" className="hover:scale-125 transition"/>
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
                <td>pending</td>
                <td>0</td>
                <th>
                    <button className="btn btn-ghost btn-xs">Feedback</button>
                </th>
                <th>
                    <button className="btn btn-warning btn-xs">Update</button>
                </th>
            </tr>
        </tbody>
    );
};

export default MyClassesTable;