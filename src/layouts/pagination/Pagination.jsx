import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Pagination = () => {
    const [active, setActive] = useState(1);

    const getItemProps = (index) => ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="container">
            <div className="flex justify-center items-center gap-4">
                <IconButton
                    variant="text"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <BsArrowLeft className="text-xl" />
                </IconButton>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                </div>
                <IconButton
                    variant="text"
                    onClick={next}
                    disabled={active === 5}
                >
                <BsArrowRight className="text-xl" />

                </IconButton>
            </div>
        </div>
    );
};

export default Pagination;