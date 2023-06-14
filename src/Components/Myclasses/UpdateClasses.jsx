import { useContext } from "react";
// import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import UpdateClassForm from "./UpdateClassForm";
import { useParams } from "react-router-dom";

const UpdateClasses = () => {
    const { user } = useContext(AuthContext)
    // const { control, setControl } = useState(false)
    // const [loading, setLoading] = useState(false);
    const { id } = useParams();
    console.log(id);
    // const token = localStorage.getItem('access-token')

    const onSubmit = (data) => {
        console.log(id);
        console.log(data);
        // const title = data.title;
        // const name = data.name;
        // const email = data.email;
        // const seats = data.seats;
        // const price = data.price;

        // const formData = new FormData();
        // formData.append('image', data.image[0]);

        // setLoading(true)
        // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         const image = data.data.display_url;
        //         const classData = {
        //             title,
        //             image,
        //             instructor: {
        //                 name,
        //                 email
        //             },
        //             seats: parseFloat(seats),
        //             price: parseFloat(price),
        //         }

        //         console.log(classData);
        //         if (classData.price) {
        //             fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
        //                 method: "PUT",
        //                 headers: {
        //                     authorization: `bearer ${token}`
        //                 },
        //                 body: JSON.stringify({classData})
        //             })
        //                 .then(res => res.json())
        //                 .then(result => {
        //                     console.log(result);
        //                     if (result.modifiedCount > 0) {
        //                         toast.success("Class Updated Successfully!")
        //                         setControl(!control)
        //                     }
        //                 })
        //         }
        //     })

    };
    return (
        <div className="mx-80">
            <Helmet>
                <title>Update A Class- CSCA</title>
            </Helmet>
            <div className="grid justify-center items-center  shadow-2xl mt-10">
                <h1 className="text-center text-[#8C0D43] text-2xl decoration-2 decoration-[#7C652E] decoration-wavy underline mt-10 mb-5 font-thin underline-offset-8">Update A Class</h1>
                <UpdateClassForm user={user} loading={''} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default UpdateClasses;