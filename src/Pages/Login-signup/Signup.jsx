/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
import SignupForm from "../../Components/Form/SignupForm";
// import axios from "axios";



const Signup = () => {
    const { createUser, setLoading, updateUserProfile, signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const [hide, setHide] = useState(false);
    const [show, setShow] = useState(false);
    const setShowHide = () => {
        setShow(!show);
    }
    const setHideShow = () => {
        setHide(!hide);
    }

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        setLoading(true)
        // console.log(data.name);

        const formData = new FormData();
        formData.append('image', data.photoURL[0]);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY_2}`;

        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imgRES => {
                console.log(imgRES.data.display_url
                    );
                const imgURL = imgRES.data.display_url
                createUser(email, password)
                    .then(res => {
                        // console.log(res.user);
                        updateUserProfile(name, imgURL)
                            .then(() => {
                                toast.success("User created successfully!")
                                saveUser(res.user)
                                navigate(from, { replace: true })
                            }).catch(error => {
                                // console.log(error.message);
                                toast.error(error.message)
                                setLoading(false)
                            })
                    })
            })
            .catch(error => {
                console.error('Error:', error);

            });

        // const formData = new FormData();
        // formData.append('image', data.photoURL[0].name);
        // console.log(data.photoURL[0].name);
        // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY_2}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then(res => res.json())
        //     .then(imgRES => {
        //         // const imageRes = imgRES.data.display_url;
        //         console.log(imgRES);
        //         // createUser(email, password)
        //         //     .then(res => {
        //         //         console.log(res.user);
        //         //         updateUserProfile(name, imgRES)
        //         //             .then(() => {
        //         //                 toast.success("User created successfully!")
        //         //                 saveUser(res.user)
        //         //                 navigate(from, { replace: true })
        //         //             }).catch(error => {
        //         //                 // console.log(error.message);
        //         //                 toast.error(error.message)
        //         //                 setLoading(false)
        //         //             })
        //         //     })
        //     })

    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                saveUser(res.user)
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
                toast.error(error.message)
                setLoading(false)
            })
    }


    return (
        <div className="lg:w-1/3 mx-auto shadow-2xl">
            <div className="lg:px-10 p-5 lg:py-10 lg:my-10 ">
                <p className="text-3xl font-bold text-center pt-5">SignUp</p>
                <SignupForm setShowHide={setShowHide} handleGoogleSignIn={handleGoogleSignIn} setHideShow={setHideShow} navigate={navigate} hide={hide} show={show} onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default Signup;