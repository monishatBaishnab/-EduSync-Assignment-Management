import { Button, Input, Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignInForm = () => {
    const {signInWithEmailPass} = useAuth();
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const toastId = toast.loading('Signining user...');

        try {
            await signInWithEmailPass(email, password);
            toast.success('Sign-in success.', { id: toastId });
            navigate('/');
        } catch (err) {
            console.log(err);
            toast.error('Sign-in failed.', { id: toastId });
        }
    }
    return (
        <div>
            <div className="flex items-center justify-center flex-col w-full min-h-screen">
                <div className="w-full md:w-[400px] py-5">
                    <div className="mb-3 text-center">
                        <Typography className="text-dark-gray" variant="h4">Signin to your Account</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Welcome back! Select method to Sign in:</Typography>
                    </div>
                    <div className="p-5 flex items-center justify-between gap-2 flex-wrap">
                        <Button variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><FcGoogle className="text-xl" />Google</Button>
                        <Button variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><FaFacebook className="text-xl text-blue-500" />Facebook</Button>
                    </div>
                    <Typography className="text-center">or continue with email</Typography>
                    <form onSubmit={handleSignIn} className="space-y-5 p-5">
                        <Input name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                        <Input name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                        <Button type="submit" className="block w-full bg-light-orange shadow-none hover:shadow-none">Sign in</Button>
                    </form>
                    <Typography className="text-center">{`Don't have account?`} <Link to='/signup' className="text-light-orange">Signup now</Link></Typography>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;