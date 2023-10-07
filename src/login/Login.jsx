import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className=' bg-slate-300'>
            <div className="py-8 min-h-screen px-4 max-w-screen-lg mx-auto">
                <h3 className="text-2xl text-center pb-6 font-semibold">Login</h3>

                <div className="mx-auto flex-1 max-w-sm bg-slate-100 p-4 rounded-md">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Email */}
                        <div className="mb-3 space-y-1">
                            <label htmlFor="email">Enter your Email<span className="text-red-500">*</span></label>
                            <input className="w-full p-2 rounded" placeholder="Type here." {...register("email", { required: true })} />
                            {errors.email?.type == 'required' && <p className="text-red-600 text-sm">Email is required</p>}
                        </div>

                        {/* password */}
                        <div className="mb-3 space-y-1">
                            <label htmlFor="password">Generate a Password<span className="text-red-500">*</span></label>
                            <input type="password" className="w-full p-2 rounded" placeholder="Type here." {...register("password", { required: true })} />
                            {errors.password?.type == 'required' && <p className="text-red-600 text-sm">Password is required</p>}
                        </div>

                        <input className="btn btn-accent normal-case min-w-full" type="submit" value={"Login"} />
                    </form>
                    <button className="btn mt-4 normal-case w-full flex justify-evenly px-20">login with google <FcGoogle size='25' /></button>
                    <p className="text-center"><Link to={'/resister'} className="link text-sm text-blue-500">Create a new account?</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;