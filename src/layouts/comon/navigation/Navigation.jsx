import { Button, Navbar, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import NavList from "./NavList";
import { useEffect, useState } from "react";
import { FaBarsProgress } from 'react-icons/fa6';
import Sidebar from "./Sidebar";
import Headroom from "react-headroom";
import ProfileMenu from "./ProfileMenu";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
    const [open, setOpen] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        window.addEventListener('resize', () => {
            window.innerWidth >= 960 && setOpen(false);
        })
    }, [])


    return (
        <div className="!z-50">
            <Headroom>
                <div className="backdrop-saturate-200 backdrop-blur-2xl border-b !z-50">
                    <div className="container py-0">
                        <Navbar className="text-dark-gray max-w-full rounded-none bg-transparent border-none shadow-none px-0">
                            <div className="flex items-center justify-between">
                                <Link className="flex items-center gap-3">
                                    <img className="w-10" src={logo} alt="EduSync" />
                                    <Typography variant="h4">EduSync</Typography>
                                </Link>

                                <div className="hidden lg:inline-block">
                                    <NavList />
                                </div>

                                <div className="flex items-center gap-2">
                                    {
                                        user === null ?
                                            <div className="hidden items-center md:flex">
                                                <Link to='/signin'>
                                                    <Button className="shadow-none hover:shadow-none hover:bg-transparent rounded-full py-2 active:bg-transparent" variant="text">Sign in</Button>
                                                </Link>
                                                <Link to='/signup'>
                                                    <Button className="shadow-none hover:shadow-none rounded-full py-2">Sign up</Button>
                                                </Link>
                                            </div>
                                            :
                                            <ProfileMenu />
                                    }

                                    <Button onClick={() => setOpen(!open)} className="text-xl px-2.5 py-2.5 lg:hidden" variant="text"><FaBarsProgress /></Button>
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </Headroom>
            <Sidebar open={open} setOpen={setOpen} />
        </div>
    );
};

export default Navigation;