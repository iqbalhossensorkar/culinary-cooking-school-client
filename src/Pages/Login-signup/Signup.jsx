/* eslint-disable no-undef */
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-hot-toast";
// import axios from "axios";



const Signup = () => {
    const { signInWithGoogle, createUser, setLoading, updateUserProfile } = useContext(AuthContext)
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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const formData = new FormData();
        formData.append('image', data.photoURL[0]);
        console.log(data.name);

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageRes => {
                const imgURL = imageRes.data.display_url;
                // console.log(imageRes.data.display_url);
                createUser(email, password)
                    .then(res => {
                        console.log(res.user);
                        updateUserProfile(name, imgURL)
                            .then(() => {
                                toast.success("User created successfully!")
                                // saveUser(res.user)
                                navigate(from, { replace: true })
                            }).catch(error => {
                                console.log(error.message);
                                toast.error(error.message)
                                setLoading(false)
                            })
                    })
            })

    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                console.log(res.user);
                // saveUser(res.user)
                navigate(from, { replace: true })
            }).catch(error => {
                console.log(error.message);
                toast.error(error.message)
                // setLoading(false)
            })
    }


    return (
        <div className="lg:w-1/3 mx-auto shadow-2xl">
            <div className="lg:px-10 p-5 lg:py-10 lg:my-10 ">
                <p className="text-3xl font-bold text-center pt-5">SignUp</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><span className="text-error">*</span> Name:</span>
                        </label>
                        <input name="name" placeholder="Type your name..." {...register("name", { required: 'name is required', })} className="input input-warning" />
                    </div>
                    {errors.name && <p className="text-error">{errors.name.message}</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><span className="text-error">*</span>Email:</span>
                        </label>
                        <input name="email" placeholder="example@email.com" {...register("email", { required: 'email is required', })} className="input input-warning" />
                    </div>
                    {errors.email && <p className="text-error">{errors.email.message}</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><span className="text-error">*</span>Password:</span>
                        </label>
                        <label className='input-group'>
                            <input name="password" type={!hide ? 'password' : 'text'}
                                {...register("password", {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                        message: 'Password must have at least one capital letter and one lowercase letter',
                                    },
                                })} className="input input-warning w-full" />
                            <span>
                                <div onClick={setHideShow}>
                                    {
                                        hide ? <FaEye className="cursor-pointer"></FaEye> : <FaEyeSlash className="cursor-pointer"></FaEyeSlash>
                                    }
                                </div></span>
                        </label>
                    </div>
                    {errors.password && <p className="text-error">{errors.password.message}</p>}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"><span className="text-error">*</span>Confirm Password:</span>
                        </label>
                        <label className='input-group'>
                            <input type={!show ? 'password' : 'text'} name="confirmPassword"
                                {...register("confirmPassword", {
                                    validate: (value) =>
                                        value === watch('password') || 'Passwords do not match',
                                })} className="input input-warning w-full" />
                            <span><div onClick={setShowHide}>
                                {
                                    show ? <FaEye className="cursor-pointer"></FaEye> : <FaEyeSlash className="cursor-pointer"></FaEyeSlash>
                                }
                            </div></span>
                        </label>
                        {errors.confirmPassword && <p className="text-error">{errors.confirmPassword.message}</p>}
                    </div>
                    <div className="lg:flex items-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"><span className="text-error">*</span>Select Photo:</span>
                            </label>
                            <input name="image" type="file" {...register("photoURL", { required: 'photo is required', })} accept="image/*" />
                            {errors.photoURL && <p className="text-error">{errors.photoURL.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Gender:</span>
                            </label>
                            <select className="select select-bordered border-warning" {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                    </div>
                    <div className="lg:flex items-center justify-between gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number:</span>
                            </label>
                            <input name="phone" type="tel" {...register("phone")} className="input input-warning" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Addresss:</span>
                            </label>
                            <input name="address" type="text" {...register("addess")} className="input input-warning" />
                        </div>
                    </div>
                    <div className="text-center mb-2">
                        <input className="bg-black w-full btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold" type="submit" />
                    </div>
                    <div className="divider">or</div>
                    <div onClick={handleGoogleSignIn} className='hover:ring-4 w-9 mx-auto hover:ring-blue-700 hover:ring-opacity-50 rounded-full'>
                        <AiFillGoogleCircle size={36} className='hover:scale-90 transition text-blue-700' />
                    </div>
                    <div className="text-center pb-5 mt-5">Already have an account <Link className="hover:underline text-error">Login</Link></div>
                </form>
            </div>
        </div>
    );
};

export default Signup;