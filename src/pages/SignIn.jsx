import { useLocation } from 'react-router-dom';
import signin from '../assets/signin.png';
import SignInForm from '../components/SignIn/SignInForm';

const SignIn = () => {
    const {state} = useLocation();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <SignInForm state={state} />
            </div>
            <div className="bg-light-orange hidden md:inline-block">
                <div className="flex min-h-screen w-full items-center justify-center p-10">
                    <img src={signin} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default SignIn;