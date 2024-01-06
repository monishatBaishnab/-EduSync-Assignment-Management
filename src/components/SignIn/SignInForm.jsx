import { Button, Input } from "@material-tailwind/react";
import toast from "react-hot-toast";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignInForm = ({state}) => {
    const { signInWithEmailPass } = useAuth();
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
            } else {
                try {
                    await axios.post('/logout');
                } catch (error) {
                    console.log(error);
                }
            }
            toast.success('Sign-in success.', { id: toastId });
            if (state) {
                navigate(state);
            } else {
                navigate('/');
            }
        } catch (err) {
            console.log(err);
            toast.error('Sign-in failed.', { id: toastId });
        }
    }

    return (
        <form onSubmit={handleSignIn} className="space-y-5 p-5">
            <Input required name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
            <Input required name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
            <Button type="submit" className="block w-full bg-light-orange shadow-none hover:shadow-none">Sign in</Button>
        </form>
    );
};

SignInForm.propTypes = {
    state: PropTypes.string,
}

export default SignInForm;