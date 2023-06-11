import { useContext } from "react";
import AddClassForm from "../../../Components/Form/AddClassForm";
import { AuthContext } from "../../../providers/AuthProviders";

const AddClass = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="mx-80">
            <div className="grid justify-center items-center  shadow-2xl mt-10">
            <h1 className="text-center text-[#8C0D43] text-2xl decoration-2 decoration-[#7C652E] decoration-wavy underline mt-10 mb-5 font-thin underline-offset-8">Add A Class</h1>
                <AddClassForm user={user} />
            </div>
        </div>
    );
};

export default AddClass;