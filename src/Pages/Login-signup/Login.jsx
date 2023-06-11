import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { saveUser } from "../../api/auth";
import LoginForm from "../../Components/Form/LoginForm";

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
                <LoginForm errorMessage={errorMessage} handleGoogleSignIn={handleGoogleSignIn} onSubmit={onSubmit} setHideShow={setHideShow} />
            </div>
        </div>
    );
};

export default Login;