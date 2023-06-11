import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet";
import AllUsersTable from "../../../Components/allUsers/AllUsersTable";
import { toast } from "react-hot-toast";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json();
    })

    const handleMakeAdmin = (user) => {
        // console.log(user);
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} become an Admin!`)
                }
                
            })

    }
    const handleMakeInstructor = (user) => {
        fetch(`${import.meta.env.VITE_API_URL}/users/instructor/${user}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} become an Instructor!`)
                }
            })
    }

    return (
        <div className="">
            {/* <Helmet>
                <title>Manage Users- CSCA</title>
            </Helmet> */}
            <p className="text-center mt-20 text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-warning-content">Manage All Users</p>
            <div className="overflow-x-auto mx-20 mt-20">
                <table className="table">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>

                    {users.map((singleUser, index) => <AllUsersTable key={singleUser._id} singleUser={singleUser} index={index} handleMakeAdmin={handleMakeAdmin} handleMakeInstructor={handleMakeInstructor}  />)}
                </table>
            </div>

        </div>
    );
};

export default AllUsers;