import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const SocialButton = ({label ,Icon, handleClick}) => {
    return (
        <Button onClick={handleClick} variant="outlined" className="flex items-center justify-center basis-full sm:basis-[calc(50%_-_8px)] w-full gap-2 capitalize text-base font-normal py-2.5 border-[rgba(128,_152,_249,_0.50)]"><Icon className="text-xl" />{label}</Button>
    );
};

SocialButton.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.string,
    handleClick: PropTypes.func,
}

export default SocialButton;