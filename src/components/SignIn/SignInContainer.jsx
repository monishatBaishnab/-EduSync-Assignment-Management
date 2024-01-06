import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from "react-icons/bs";
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { socialSignIn } from "../../utils/socialSignIn";
import SocialButton from "./SocialButton";
import SignInForm from "./SignInForm";

const SignInContainer = ({ state }) => {
    const { signInWithGoogle, signInWitGithub } = useAuth();
    const navigate = useNavigate();
    const axios = useAxios();
    
    const handleGoogleSignin = async () => {
        await socialSignIn(axios, signInWithGoogle, navigate, state);
    }

    const handleGithubSignin = async () => {
        await socialSignIn(axios, signInWitGithub, navigate, state);
    }

    return (
        <div>
            <div className="flex items-center justify-center flex-col w-full min-h-screen">
                <div className="w-full md:w-[400px] py-5">
                    <div className="mb-3 text-center">
                        <Typography className="text-dark-gray" variant="h4">Signin to your Account</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Welcome back! Select method to Sign in.</Typography>
                    </div>

                    <div className="p-5 flex items-center justify-between gap-2 flex-wrap">
                        <SocialButton Icon={FcGoogle} label='Google' handleClick={handleGoogleSignin} />
                        <SocialButton Icon={BsGithub} label='GitHub' handleClick={handleGithubSignin} />
                    </div>
                    <Typography className="text-center">or continue with email</Typography>
                    <SignInForm state={state} />
                    <Typography className="text-center">{`Don't have account?`} <Link to='/signup' className="text-light-orange">Signup now</Link></Typography>
                </div>
            </div>
        </div>
    );
};

SignInContainer.propTypes = {
    state: PropTypes.string,
}

export default SignInContainer;