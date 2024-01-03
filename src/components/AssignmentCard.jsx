import { IconButton, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types'
import { AiOutlineEye } from "react-icons/ai";
import { BsFillTrash3Fill, BsPencilSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const AssignmentCard = ({ assignment, refetch }) => {
    const { _id, title, thumbnail, mark, level, user: auth } = assignment || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const axios = useAxios();

    const handleDelete = async () => {
        const toastId = toast.loading('Deleteing Assignment....');
        try {
            const res = await axios.delete(`/assignments/${_id}?email=${user?.email}&assignmentEmail=${auth?.email}`);
            try {
                const data = await res.data;
                if (data?.acknowledged) {
                    toast.success('Assignment Deleted.', { id: toastId });
                    refetch();
                }
            } catch (error) {
                toast.error('Unauthorized access.', { id: toastId });
            }
        } catch (error) {
            if (error) {
                toast.error("Internal server error.", { id: toastId });
            }
        }
    }

    return (
        <div className="p-5 border bg-white md:flex md:items-center md:gap-5">
            <div className="w-full h-[180px] overflow-hidden rounded md:w-[250px]">
                <img src={thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 mt-3">
                <Typography variant="h6">{title?.length > 25 ? title?.slice(0, 25)+'...' : title}</Typography>
                <div className="flex flex-col">
                    <span>Mark: <span className="bg-light-orange/50 px-2 rounded">{mark}</span></span>
                    <span>Lacel: <span className="bg-light-orange/50 px-2 rounded">{level}</span></span>
                </div>
                <div className="flex items-center gap-2">
                    <IconButton onClick={() => navigate(`/details/${_id}`)} className="w-full shadow-none hover:shadow-none text-lg" color="light-blue"><AiOutlineEye /></IconButton>
                    <IconButton onClick={() => navigate(`/update/${_id}`)} className="w-full shadow-none hover:shadow-none text-lg" color="green"><BsPencilSquare /></IconButton>
                    <IconButton onClick={handleDelete} className="w-full shadow-none hover:shadow-none text-lg" color="red"><BsFillTrash3Fill /></IconButton>
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
    refetch: PropTypes.func,
}

export default AssignmentCard;