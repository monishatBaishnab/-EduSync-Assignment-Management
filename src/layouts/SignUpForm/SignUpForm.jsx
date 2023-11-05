import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiImageAlt } from "react-icons/bi";

const SignUpForm = () => {
    const handleSingUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const cpassword = form.get('cpassword');
        const tarms = form.get('tarms');
        if(tarms === 'on'){
            console.log(name, photo, email, password, cpassword);
        }else{
            console.log('select trams and condition');
        }
    }
    return (
        <div className="flex items-center justify-center flex-col w-full min-h-screen">
            <div className="max-w-[480px]">
                <div className="mb-3 text-center">
                    <Typography className="text-dark-gray" variant="h4">Create your account</Typography>
                    <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Unlock all Features!</Typography>
                </div>
                <form onSubmit={handleSingUp} className="space-y-5 p-5">
                    <Input name="name" className="focus:outline-dark-gray" type="text" label="Name" icon={<AiOutlineUser />} />
                    <Input name="photo" className="focus:outline-dark-gray" type="text" label="Photo URL" icon={<BiImageAlt />} />
                    <Input name="email" className="focus:outline-dark-gray" type="email" label="Email" icon={<HiOutlineMail />} />
                    <Input name="password" className="focus:outline-dark-gray" type="password" label="Password" icon={<RiLockPasswordLine />} />
                    <Input name="cpassword" className="focus:outline-dark-gray" type="password" label="Confirm Password" icon={<RiLockPasswordLine />} />
                    <Checkbox name="tarms" label='Accept terms and conditions' />
                    <Button type="submit" className="block w-full bg-light-orange shadow-none hover:shadow-none">Sign in</Button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;