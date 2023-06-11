/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginForm = ({onSubmit, hide, setHideShow, errorMessage, handleGoogleSignIn}) => {
    const { register, handleSubmit } = useForm();
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email:</span>
                    </label>
                    <input name="email" placeholder="example@email.com" {...register("email", { required: true })} className="input input-warning" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"><span className="text-error">*</span>Password:</span>
                    </label>
                    <label className='input-group'>
                        <input name="password" type={!hide ? 'password' : 'text'}
                            {...register("password", { required: true })} className="input input-warning w-full" />
                        <span>
                            <div onClick={setHideShow}>
                                {
                                    hide ? <FaEye className="cursor-pointer"></FaEye> : <FaEyeSlash className="cursor-pointer"></FaEyeSlash>
                                }
                            </div></span>
                    </label>
                </div>
                {errorMessage && <p className="text-error">{errorMessage}</p>}
                <div className="text-center mb-2">
                    <input value="login" className="bg-black w-full btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold" type="submit" />
                </div>
                <div className="divider">or</div>
                <div onClick={handleGoogleSignIn} className='hover:ring-4 w-9 mx-auto hover:ring-blue-700 hover:ring-opacity-50 rounded-full'>
                    <AiFillGoogleCircle size={36} className='hover:scale-90 transition text-blue-700' />
                </div>
                <div className="text-center pb-5 mt-5">Dont have an account? <Link to='/signup' className="hover:underline text-error">Create One</Link></div>
            </form>
        </>
    );
};

export default LoginForm;