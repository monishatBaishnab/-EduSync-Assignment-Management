import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavList = () => {

    return (
        <Typography as='ul' className="flex items-start flex-col gap-5 lg:flex-row lg:items-center">
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "text-light-orange font-medium" : ""} to='/'>Home</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "text-light-orange font-medium" : ""} to='/assignments'>Assignment</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "text-light-orange font-medium" : ""} to='/myAssignment'>My Assignment</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "text-light-orange font-medium" : ""} to='/submited'>Submited Assignment</NavLink></Typography>
        </Typography>
    );
};

export default NavList;