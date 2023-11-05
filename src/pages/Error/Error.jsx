import { Button, Typography } from "@material-tailwind/react";
import useLottieAnimation from "../../hooks/useLottieAnimation";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Error = () => {
    const { error } = useLottieAnimation();
    return (
        <div className="container">
            <div className="flex items-center flex-col">
                <div className="max-w-[300px]">
                    {error}
                </div>
                <div className="text-center mt-[-70px]">
                    <Typography variant="h4">404 - Page Not Found</Typography>
                </div>
                <Link className="mt-10"><Button className="bg-dark-gray flex items-center gap-2 py-2.5"><BsArrowLeft className="text-xl" />Go Home</Button></Link>
            </div>
        </div>
    );
};

export default Error;