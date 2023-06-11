/* eslint-disable react/prop-types */
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, } from "react-router-dom";
import { useForm } from "react-hook-form";


const SignupForm = ({ setShowHide, handleGoogleSignIn, setHideShow, hide, show, onSubmit }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  

    return (
        <>
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
                        <input className="file-input file-input-warning" name="image" type="file" {...register("photoURL", { required: 'photo is required', })} accept="image/*" />
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
                    <input value="Signup" className="bg-black w-full btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold" type="submit" />
                </div>
                <div className="divider">or</div>
                <div onClick={handleGoogleSignIn} className='hover:ring-4 w-9 mx-auto hover:ring-blue-700 hover:ring-opacity-50 rounded-full'>
                    <AiFillGoogleCircle size={36} className='hover:scale-90 transition text-blue-700' />
                </div>
                <div className="text-center pb-5 mt-5">Already have an account <Link to='/login' className="hover:underline text-error">Login</Link></div>
            </form>
        </>
    );
};

export default SignupForm;