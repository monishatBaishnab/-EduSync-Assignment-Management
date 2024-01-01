import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import hero_frame from '../../../assets/hero-frame.png';
import Tilt from 'react-parallax-tilt';

const Header = () => {
    return (
        <div className="bg-hero">
            <div className="bg-light-orange/80">
                <div className="container py-24">
                    <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="text-dark-gray space-y-5">
                            <Typography variant="h2">{`Welcome to "EduSync" - Where Learning Thrives Through Collaboration!`}</Typography>
                            <Typography as='p' className="font-normal">EduSync is your online destination for collaborative learning. Join forces with peers, access shared study resources, and enhance your educational journey together. Empower your studies with the strength of community and knowledge-sharing.</Typography>
                            <Link to='/assignments' className="inline-block">
                                <Button className="rounded-full flex items-center gap-2 font-normal">Explore Assignments <BsArrowRight className="text-lg" /></Button>
                            </Link>
                        </div>
                        <Tilt scale={1.1} transitionSpeed={2500}>
                            <div className="flex items-center justify-center h-[500px] w-full overflow-hidden">
                                <img className="object-contain w-full h-full" src={hero_frame} alt={hero_frame} />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;