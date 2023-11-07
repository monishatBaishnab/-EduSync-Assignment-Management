import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { AiOutlineEye } from "react-icons/ai";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AssignmentCard = ({ assignment, page }) => {
    const { _id, title, thumbnail, mark, level } = assignment || {};
    const navigate = useNavigate();

    return (
        <div className="p-5 border bg-white md:flex md:items-center md:gap-5">
            <div className="w-full h-[180px] overflow-hidden rounded md:w-[250px]">
                <img src={thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 mt-3">
                <Typography variant="h6">{title}</Typography>
                <div className="flex flex-col">
                    <span>Mark: <span className="bg-light-orange/50 px-2 rounded">{mark}</span></span>
                    <span>Lacel: <span className="bg-light-orange/50 px-2 rounded">{level}</span></span>
                </div>
                <div className="flex items-center gap-2">
                    <IconButton onClick={() => navigate(`/details/${_id}`)} className="w-full shadow-none hover:shadow-none text-lg" color="light-blue"><AiOutlineEye /></IconButton>
                    <IconButton onClick={() => navigate(`/update/${_id}`)} className="w-full shadow-none hover:shadow-none text-lg" color="green"><BsPencilSquare /></IconButton>

                    {
                        page === 'delete' &&
                        <IconButton className="w-full shadow-none hover:shadow-none text-lg" color="red"><BsFillTrash3Fill /></IconButton>
                    }
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    page: PropTypes.string,
}

export default AssignmentCard;