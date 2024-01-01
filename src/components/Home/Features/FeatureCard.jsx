import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion"
import PropTypes from 'prop-types';

const FeatureCard = ({ item }) => {
    const { title, desc, icon } = item;

    return (
        <motion.div
            whileHover={{ translateY: -5 }}
            transition={{ type: 'spring'}}
            className="space-y-4 border p-5 rounded bg-white hover:border-light-orange transition-[border] duration-300">
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