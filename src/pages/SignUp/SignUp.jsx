import SignUpForm from "../../layouts/SignUpForm/SignUpForm";
import signup from '../../assets/signup.png';

const SignUp = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <SignUpForm />
            </div>
            <div className="bg-light-orange hidden md:inline-block">
                <div className="flex min-h-screen w-full items-center justify-center p-10">
                    <img src={signup} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;