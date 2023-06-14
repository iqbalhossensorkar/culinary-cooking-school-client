// import { Helmet } from "react-helmet";

import { useContext } from "react";
import useAxiosSecure from "../../../api/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import AllClassesTable from "../../../Components/AllClasses/AllClassesTable";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext)
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/class')
            // console.log('res from axios', res.data)
            return res.data
        },
    })


    const handleMakeApprove = (user) => {
        console.log(user);
        fetch(`${import.meta.env.VITE_API_URL}/class/approved/${user}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.success(`${user.name} Approved SuccessFully!`)
                }

            })
    }
    const handleMakeDeny = (user) => {
        fetch(`${import.meta.env.VITE_API_URL}/class/deny/${user}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    toast.error(`${user.name} Class Denied!`)
                }
            })
    }


    return (
        <div className="" >
            {/* <Helmet>
            <title>Manage Users- CSCA</title>
        </Helmet> */}
            < p className="text-center mt-20 text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-warning-content" > Manage All Classes</p>
            <div className="overflow-x-auto mx-20 mt-20 mb-20">
                <table className="table">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>instructor Info</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((singleClass, index) => <AllClassesTable key={singleClass._id} singleClass={singleClass} index={index} handleMakeApprove={handleMakeApprove} handleMakeDeny={handleMakeDeny} />)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageClasses;