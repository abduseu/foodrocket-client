import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosBase } from "../hooks/useAxios";

const LoginPage = () => {
    const { signinEmail, signinGoogle } = useContext(AuthContext)
    const navigate = useNavigate()
    const [validationError, setValidationError] = useState([])

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        signinEmail(email, password)
            .then((result) => {
                const LoggedUser = result.user;
                e.target.reset()

                console.log(LoggedUser)
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                //login validation
                if (errorCode === 'auth/invalid-login-credentials') {
                    setValidationError('Email or password does not match!')

                } else {
                    setValidationError(errorCode)
                }
            });
    }

    const handleGoogle = () => {
        signinGoogle()
            .then(result => {
                console.log('Google login succesful', result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'user'
                }
                axiosBase.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
            })
            .catch(error => {
                setValidationError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-8">Login Please!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6 red font-bold">
                                <Link to="/signup">Create an account.</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-prim text-white hover:bg-black font-bold w-full py-2 rounded">Login</button>
                            </div>
                        </form>

                        <div className="divider">login with</div>
                        <div className="form-control">
                            <button onClick={handleGoogle} className="bg-blue-600 text-white hover:bg-yellow-500 font-bold w-full py-2 rounded">Google</button>
                        </div>
                        <p className="py-4 text-red-600 font-semibold">
                            {validationError}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;