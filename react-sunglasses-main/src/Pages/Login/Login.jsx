import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useForm } from 'react-hook-form';
import PasswordResetModal from '../../Components/PasswordResetModal/PasswordResetModal';


const Login = () => {
    const { signIn } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';


    const onSubmit = (data) => {
        const { email, password } = data
        signIn(email, password)
            .then((result) => {
                if (result.user)
                    navigate(from)
                // console.log(result);
            })
            .catch((errors) => {
                console.log(errors);
            })
    }


    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mx-auto text-center">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                {/* modal */}
                                < PasswordResetModal></PasswordResetModal>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button className="btn btn-neutral">Login</button>
                            </div>
                            <label className="label">
                                New here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </>
    );
};

export default Login;