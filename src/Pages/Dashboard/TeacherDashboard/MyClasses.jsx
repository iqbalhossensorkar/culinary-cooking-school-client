import { useContext } from "react";
import MyClassesTable from "../../../Components/Myclasses/MyClassesTable";
import useAxiosSecure from "../../../api/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useContext(AuthContext)
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(
                `${import.meta.env.VITE_API_URL}/class/${user?.email}`
            )
            // console.log('res from axios', res.data)
            return res.data
        },
    })
    return (
        <div>
            <h1 className="text-center text-[#8C0D43] text-2xl decoration-2 decoration-[#7C652E] decoration-wavy underline mt-20 mb-24 font-thin underline-offset-8">My Classes</h1>
            <div>
                <div className="overflow-x-auto px-20">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Image/Name</th>
                                <th>Instructor</th>
                                <th>Status</th>
                                <th>Enrolled Student</th>
                                <th></th>
                            </tr>
                        </thead>
                        {classes &&
                            classes.map(item => (
                                <MyClassesTable
                                    key={item?._id}
                                    item={item}
                                    refetch={refetch}
                                />
                            ))}
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;