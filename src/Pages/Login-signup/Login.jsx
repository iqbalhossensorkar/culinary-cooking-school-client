import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";

const Login = () => {
    const { signInWithGoogle, signIn, setLoading } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'
    const [hide, setHide] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const setHideShow = () => {
        setHide(!hide);
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        setLoading(true)
        signIn(email, password)
        .then(res => {
            console.log(res.user);
            toast.success('login Successfull!')
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error.message);
            setErrorMessage(error.message);
            setLoading(false)
        })
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
                <p className="text-3xl font-bold text-center pt-5">LogIn</p>
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
                        <input className="bg-black w-full btn mt-5 mb-3 text-white hover:text-black hover:border-2 transition px-8 py-2 rounded hover:bg-transparent border-red-400 font-bold" type="submit" />
                    </div>
                    <div className="divider">or</div>
                    <div onClick={handleGoogleSignIn} className='hover:ring-4 w-9 mx-auto hover:ring-blue-700 hover:ring-opacity-50 rounded-full'>
                        <AiFillGoogleCircle size={36} className='hover:scale-90 transition text-blue-700' />
                    </div>
                    <div className="text-center pb-5 mt-5">Dont have an account? <Link to='/signup' className="hover:underline text-error">Create One</Link></div>
                </form>
            </div>
        </div>
    );
};

export default Login;