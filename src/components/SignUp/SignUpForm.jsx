import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SignUpForm = () => {
    const { signUpWithEmailPass, updateUser } = useAuth();
    const navigate = useNavigate();
    const axios = useAxiosSecure();

    const handleSingUp = async(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const cpassword = form.get('cpassword');
        const tarms = form.get('tarms');

        const toastId = toast.loading('Creating user...');
        if (tarms === 'on') {
            if (password.length >= 6 && cpassword.length >= 6) {
                if (password === cpassword) {
                    try {
                        const user = await signUpWithEmailPass(email, password);
                        await updateUser(name, photo);
                        if (user) {
                            try {
                                await axios.post('/create-access-key', { email: user?.email });
                            } catch (error) {
                                console.log(error);
                            }
                        }else {
                            try {
                                await axios.post('/clear-access-key');
                            } catch (error) {
                                console.log(error);
                            }
                        }
                        toast.success('User account created.', {id: toastId});
                        navigate('/');
                    } catch (err) {
                        console.log(err);
                        toast.error('Sign-up failed.', {id: toastId});
                    }
                    
                }else{
                    toast.error('Passwords do not match.', {id: toastId});
                }
            }else{
                toast.error("Short Password Length.", {id: toastId});
            }
        } else {
            toast.error("Accept Terms & Conditions.", {id: toastId});
        }
    }
    return (
        <div className="flex items-center justify-center flex-col w-full min-h-screen">
            <div className="w-full md:w-[400px] py-5">
                <div className="mb-3 text-center">
                    <Typography className="text-dark-gray" variant="h4">Create your account</Typography>
                    <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Unlock all Features!</Typography>
                </div>
                <form onSubmit={handleSingUp} className="space-y-5 p-5 w-full">
                    <Input required name="name" className="focus:outline-dark-gray" type="text" label="Name" icon={<AiOutlineUser />} />
                    <Input required name="photo" className="focus:outline-dark-gray" type="text" label="Photo URL" icon={<BiImageAlt />} />
                    <Input required name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                    <Input required name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                    <Input required name="cpassword" className="focus:outline-dark-gray" type="password" label="Confirm Password" icon={<RiLockPasswordLine />} />
                    <Checkbox name="tarms" label='Accept terms and conditions' />
                    <Button type="submit" className="block w-full bg-light-orange shadow-none hover:shadow-none">Sign up</Button>
                </form>
                <Typography className="text-center">You have account? <Link to='/signin' className="text-light-orange">Signin now</Link></Typography>
            </div>
        </div>
    );
};

export default SignUpForm;