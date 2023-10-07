import { useForm } from "react-hook-form"
import { Link } from "react-router-dom";

const Resister = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className=' bg-slate-300'>
            <div className="py-5 min-h-screen px-4 max-w-screen-lg mx-auto">
                <h3 className="text-2xl text-center pb-4 font-semibold">Resister Now</h3>
                <form className="mx-auto flex-1 max-w-sm bg-slate-100 p-4 rounded-md" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="mb-3 space-y-1">
                        <label htmlFor="name">Enter your Name<span className="text-red-500">*</span></label>
                        <input className="w-full p-2 rounded" placeholder="Type here." {...register("name", { required: true, maxLength: 25 })} />
                        {errors.name?.type === "required" && <p className="text-red-600 text-sm">Name is required</p>}
                    </div>

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

                    {/*confirm password */}
                    <div className="mb-3 space-y-1">
                        <label htmlFor="confirm_password">Confirm Password<span className="text-red-500">*</span></label>
                        <input type="password" className="w-full p-2 rounded" placeholder="Type here." {...register("confirm_password", { required: true, manLength: "2" })} />
                        {errors.confirm_password?.type == 'required' && <p className="text-red-600 text-sm">confirm password is required</p>}
                        {errors.confirm_password?.type == 'manLength' && <p className="text-red-600 text-sm">password doesn&apos;t mach</p>}
                    </div>

                    {/*Photo URL */}
                    <div className="mb-3 space-y-1">
                        <label htmlFor="photo">Enter your photo url<span className="text-red-500">*</span></label>
                        <input className="w-full p-2 rounded" placeholder="Type here." {...register("photo", { required: true })} />
                        {errors.photo?.type == 'required' && <p className="text-red-600 text-sm">Photo is required</p>}
                    </div>

                    <input className="btn btn-accent min-w-full" type="submit" value={"Resister"} />

                    <p className="text-center"><Link to={'/login'} className="link text-sm text-blue-500">Already have an account?</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Resister;