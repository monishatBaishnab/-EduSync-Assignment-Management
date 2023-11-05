import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavList = () => {

    return (
        <Typography as='ul' className="flex items-start flex-col gap-5 lg:flex-row lg:items-center">
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "bg-dark-gray text-white px-4 py-1 rounded-md" : ""} to='/'>Home</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "bg-dark-gray text-white px-4 py-1 rounded-md" : ""} to='/assignments'>Assignments</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "bg-dark-gray text-white px-4 py-1 rounded-md" : ""} to='/create'>Create</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "bg-dark-gray text-white px-4 py-1 rounded-md" : ""} to='/myAssignment'>MyAssignment</NavLink></Typography>
            <Typography className="font-normal" as='li'><NavLink className={({ isActive }) =>  isActive ? "bg-dark-gray text-white px-4 py-1 rounded-md" : ""} to='/submited'>Submited</NavLink></Typography>
        </Typography>
    );
};

export default NavList;