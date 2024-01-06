import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import { BsFillFileEarmarkCheckFill } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { dateDifferance, formatDate } from "../utils/dateManipulation";
import { FaRegUser } from "react-icons/fa";
import CreateSolution from "../components/Details/CreateSolution";
import toast from "react-hot-toast";
const AssignmentDetails = () => {
    const [assignment, setAssignment] = useState({});
    const [open, setOpen] = useState(false);
    const { user } = useAuth();
    const { id } = useParams();
    const axios = useAxios();
    const navigate = useNavigate();

    const { _id, title, thumbnail, mark, description, level, dueDate, user: auth } = assignment || {};

    const levelStyle = `${level === 'easy' ? 'bg-green-500/20 text-green-500' : level === 'medium' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'}`
    const formatedDate = formatDate(dueDate);
    const dateDiff = dateDifferance(dueDate);
    const handleOpen = () => setOpen(!open);
    // const handleResponse = async (e) => {
    //     const toastId = toast.loading('Submiting assignment...');
    //     e.preventDefault();
    //     const form = e.target;
    //     const pdf = form.pdf.value;
    //     const note = form.note.value;

    //     const submitedAssignment = {
    //         asssignmentId: _id,
    //         title,
    //         mark,
    //         submitedDate: new Date().toLocaleDateString(),
    //         level,
    //         status: 'pending',
    //         pdf,
    //         note,
    //         submitedUser: user.email,
    //         givenMark: null,
    //         givenMarkUser: null,
    //         feedback: null
    //     }

    //     const res = await axios.post(`/submited/assignments?email=${user.email}`, submitedAssignment);
    //     const data = await res.data;
    //     if (data.acknowledged) {
    //         toast.success('Submited success.', { id: toastId });
    //         navigate('/submited');
    //     } else {
    //         toast.error('Inernal server error.', { id: toastId });
    //     }

    //     handleOpen();
    // }

    useEffect(() => {
        axios.get(`/assignments/${id}?email=${user.email}`)
            .then(res => setAssignment(res.data));
    }, [axios, id, user.email])

    return (
        <div className="bg-blue-gray-50">
            <div className="container grid gap-5 grid-cols-1 md:grid-cols-5">
                <div className="w-full h-full sm:h-[300px] overflow-hidden rounded bg-white p-5 col-span-2">
                    <img className="h-full w-full object-cover rounded" src={thumbnail} alt={title} />
                </div>
                <div className="bg-white rounded p-5 space-y-4 col-span-3">
                    <Typography variant="h4" className="border-b pb-4">{title}</Typography>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <Typography className="flex items-center gap-2 font-normal">Total Mark: <Typography className="px-2 flex items-center gap-1 rounded bg-blue-gray-50 text-blue-gray-800"><BsFillFileEarmarkCheckFill />{mark}</Typography></Typography>
                        <Typography className="flex items-center gap-2 font-normal">Level: <Typography className={`px-2 flex items-center gap-1 rounded ${levelStyle}`}><TbArrowBigUpLinesFilled />{level}</Typography></Typography>
                    </div>
                    <Typography variant="paragraph" className="font-normal text-blue-gray-600 text-justify">{description}</Typography>
                    <div className="flex items-center justify-between flex-wrap">
                        <Typography className="font-normal flex items-center gap-2 text-blue-gray-800"><MdDateRange className="text-lg text-blue-500" />{dateDiff ? formatedDate : 'Deadline Finished'}</Typography>
                        <Typography className="font-normal flex items-center gap-2 text-blue-gray-800"><FaRegUser className="text-lg text-blue-500" />{auth?.email}</Typography>
                    </div>
                    <div className="flex items-center gap-3 border-t pt-4">
                        <Button onClick={handleOpen} disabled={!dateDiff} className="bg-light-orange shadow-none hover:shadow-none">Create Solution</Button>
                        {/* <Button color="green" className=" shadow-none hover:shadow-none">Solutions</Button> */}
                    </div>
                </div>
            </div>
            <CreateSolution open={open} handleOpen={handleOpen} />
        </div>
    );
};

export default AssignmentDetails;