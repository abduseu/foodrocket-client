import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { axiosBase } from "../hooks/useAxios";


const SignupPage = () => {
    const { createEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const [validationError, setValidationError] = useState([])

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        //Signup validation
        setValidationError([])

        if (password.length < 6) {
            setValidationError('Password is less than 6 characters!')
            return
        } else if (!/[A-Z]/.test(password)) {
            setValidationError('Password should have atleast one capital letter!')
            return
        } else if (!/[@#$%^&+=]/.test(password)) {
            setValidationError('Add atleast one special character: @#$%^&+=')
            return
        }

        createEmail(email, password)
            .then((result) => {
                const createdUser = result.user;
                console.log(createdUser)

                //update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                .then(() => {
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
                    console.log('Profile Updated')
                })
                .catch(error => {
                    console.log('Profile update failed', error.message)
                })

                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                setValidationError(errorCode)
            });
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:w-1/2">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold pb-8">Signup Please!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="http://paste_your_photo_url_here" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6 red font-bold">
                                <Link to="/login">Already have an account?</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-prim text-white hover:bg-black font-bold w-full py-2 rounded">Sign up</button>
                            </div>
                            <p className="py-4 text-red-600 font-semibold">
                                {validationError}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;