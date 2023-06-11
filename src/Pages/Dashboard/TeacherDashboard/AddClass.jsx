import { useContext, useState } from "react";
import AddClassForm from "../../../Components/Form/AddClassForm";
import { AuthContext } from "../../../providers/AuthProviders";
import { Helmet } from "react-helmet";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false);

    const onSubmit = data => {
        const title = data.title;
        const name = data.name;
        const email = data.email;
        const seats = data.seats;
        const price = data.price;

        const formData = new FormData();
        formData.append('image', data.image[0]);

        setLoading(true)
        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                const image = data.data.display_url;
                const classData = {
                    title,
                    image,
                    instructor: {
                        name,
                        email
                    },
                    seats,
                    price
                }
                console.log(classData);
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
                setLoading(false)
            })

    };
    return (
        <div className="mx-80">
            <Helmet>
                <title>Add A Class- CSCA</title>
            </Helmet>
            <div className="grid justify-center items-center  shadow-2xl mt-10">
                <h1 className="text-center text-[#8C0D43] text-2xl decoration-2 decoration-[#7C652E] decoration-wavy underline mt-10 mb-5 font-thin underline-offset-8">Add A Class</h1>
                <AddClassForm user={user} loading={loading} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default AddClass;