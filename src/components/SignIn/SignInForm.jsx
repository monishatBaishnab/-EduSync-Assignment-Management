import { Button, Input, Typography } from "@material-tailwind/react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from "react-icons/bs";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const SignInForm = ({state}) => {
    const { signInWithEmailPass, signInWithGoogle, signInWitGithub } = useAuth();
    const navigate = useNavigate();
    const axios = useAxios();

    const handleSignIn = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const toastId = toast.loading('Signining user...');

        try {
            const user = await signInWithEmailPass(email, password);
            if (user) {
                try {
                    await axios.post('/token', { email: user?.email });
                } catch (error) {
                    console.log(error);
                }
            }else {
                try {
                    await axios.post('/logout');
                } catch (error) {
                    console.log(error);
                }
            }
            toast.success('Sign-in success.', { id: toastId });
            if(state){
                navigate(state);
            }else{
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            toast.error('Sign-in failed.', { id: toastId });
        }
    }

    const handleGoogleSignin = async () => {
        const toastId = toast.loading('Signining user...');
        try {
            const user = await signInWithGoogle();
            if (user) {
                try {
                    await axios.post('/token', { email: user?.email });
                } catch (error) {
                    console.log(error);
                }
            }else {
                try {
                    await axios.post('/logout');
                } catch (error) {
                    console.log(error);
                }
            }
            toast.success('Sign-in success.', { id: toastId });
            if(state){
                navigate(state);
            }else{
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
            toast.error('Sign-in failed.', { id: toastId });
        }
    }

    const handleGithubSignin = async() => {
        const toastId = toast.loading('Signining user...');
        try {
            const user = await signInWitGithub();
            if (user) {
                try {
                    await axios.post('/token', { email: user?.email });
                } catch (error) {
                    console.log(error);
                }
            }else {
                try {
                    await axios.post('/logout');
                } catch (error) {
                    console.log(error);
                }
            }
            toast.success('Sign-in success.', { id: toastId });
            if(state){
                navigate(state);
            }else{
                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
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
                        <Button onClick={handleGoogleSignin} variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><FcGoogle className="text-xl" />Google</Button>
                        <Button onClick={handleGithubSignin} variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><BsGithub className="text-xl" />Github</Button>
                    </div>
                    <Typography className="text-center">or continue with email</Typography>
                    <form onSubmit={handleSignIn} className="space-y-5 p-5">
                        <Input required name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                        <Input required name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                        <Button type="submit" className="block w-full bg-light-orange shadow-none hover:shadow-none">Sign in</Button>
                    </form>
                    <Typography className="text-center">{`Don't have account?`} <Link to='/signup' className="text-light-orange">Signup now</Link></Typography>
                </div>
            </div>
        </div>
    );
};

SignInForm.propTypes = {
    state: PropTypes.string,
}

export default SignInForm;