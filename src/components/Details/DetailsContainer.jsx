import { Button, Typography } from "@material-tailwind/react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { dateDifferance, formatDate } from "../../utils/dateManipulation";
import { useState } from "react";
import PropTypes from 'prop-types';
import CreateSolution from "./CreateSolution";

const DetailsContainer = ({ assignment }) => {
    const [open, setOpen] = useState(false);
    const {_id, title, thumbnail, maxMark, description, level, deadline, author: auth } = assignment || {};

    const levelStyle = `${level === 'easy' ? 'bg-green-500/20 text-green-500' : level === 'medium' ? 'bg-yellow-500/20 text-yellow-700' : 'bg-red-500/20 text-red-500'}`
    const formatedDate = formatDate(deadline);
    const dateDiff = dateDifferance(deadline);
    const handleOpen = () => setOpen(!open);

    return (
        <div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-5">
                <div className="w-full h-full sm:h-[300px] overflow-hidden rounded bg-white p-5 col-span-2">
                    <img className="h-full w-full object-cover rounded" src={thumbnail} alt={title} />
                </div>
                <div className="bg-white rounded p-5 space-y-4 col-span-3">
                    <Typography variant="h4" className="border-b pb-4">{title}</Typography>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <Typography className="flex items-center gap-2 font-normal text-sm">Total Mark: <Typography className="px-2 text-sm flex items-center gap-1 rounded bg-blue-gray-50 text-blue-gray-800"><BsFillFileEarmarkCheckFill />{maxMark}</Typography></Typography>
                        <Typography className="flex items-center gap-2 font-normal text-sm">Level: <Typography className={`px-2 text-sm flex items-center gap-1 rounded ${levelStyle}`}><TbArrowBigUpLinesFilled />{level}</Typography></Typography>
                    </div>
                    <Typography variant="paragraph" className="font-normal text-blue-gray-600 text-justify">{description}</Typography>
                    <div className="flex items-center justify-between flex-wrap">
                        <Typography className="font-normal flex items-center gap-2 text-blue-gray-800 text-sm"><MdDateRange className="text-lg text-blue-500" />{dateDiff ? formatedDate : 'Deadline Finished'}</Typography>
                        <Typography className="font-normal flex items-center gap-2 text-blue-gray-800 text-sm"><FaRegUser className="text-lg text-blue-500" />{auth?.email}</Typography>
                    </div>
                    <div className="flex items-center gap-3 border-t pt-4">
                        <Button onClick={handleOpen} disabled={!dateDiff} className="bg-light-orange shadow-none hover:shadow-none">Create Solution</Button>
                        {/* <Button color="green" className=" shadow-none hover:shadow-none">Solutions</Button> */}
                    </div>
                </div>
            </div>
            <CreateSolution assignmentId={_id} open={open} handleOpen={handleOpen} />
        </div>
    );
};

DetailsContainer.propTypes = {
    assignment: PropTypes.object,
}

export default DetailsContainer;