import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

const FeatureCard = ({ item }) => {
    const { title, desc, icon } = item;

    return (
        <motion.div
            whileHover={{ translateY: -5 }}
            transition={{ type: 'spring'}}
            className="space-y-4 border-[1.5px] rounded-md bg-white transition-[border] duration-300 hover:border-gray-400 p-5 flex flex-col items-center text-center">
            <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                {icon}
            </div>
            <Typography variant="h5">{title}</Typography>
            <Typography className="text-blue-gray-500 font-normal" variant="paragraph">{desc}</Typography>
        </motion.div>

    );
};

FeatureCard.propTypes = {
    item: PropTypes.object,
}

export default FeatureCard;