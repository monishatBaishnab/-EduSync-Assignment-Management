import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { motion } from 'framer-motion';
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignment }) => {
    const { _id, title, thumbnail, maxMark, level } = assignment || {};
    const navigate = useNavigate();
    const levelStyle = `${level === 'easy' ? 'bg-green-500/20 text-green-500' : level === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'}`

    return (
        <motion.div
            onClick={() => navigate('/details/' + _id)}
            whileHover={{ translateY: -4 }}
            transition={{ type: 'spring' }}
            className="p-5 border-[1.5px] rounded-md bg-white transition-[border] duration-300 hover:border-gray-400 cursor-pointer">
            <div className="w-full overflow-hidden rounded">
                <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 mt-3">
                <Typography variant="h6">{title?.length > 20 ? title?.slice(0, 20) + '...' : title}</Typography>
                <div className="flex justify-between">
                    <span className="px-2 flex items-center gap-1 rounded bg-blue-gray-50 text-blue-gray-800"><BsFillFileEarmarkCheckFill />{maxMark}</span>
                    <span className={`px-2 flex items-center gap-1 rounded ${levelStyle}`}><TbArrowBigUpLinesFilled />{level}</span>
                </div>
            </div>
        </motion.div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    refetch: PropTypes.func,
}

export default AssignmentCard;