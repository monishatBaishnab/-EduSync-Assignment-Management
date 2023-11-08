import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
    const [assignment, setAssignment] = useState({});
    const [open, setOpen] = useState(false);

    const { user } = useAuth();
    const { id } = useParams();
    const axios = useAxios();
    const { _id, title, thumbnail, mark, description, level, dueDate, user: auth } = assignment || {};

    const handleOpen = () => setOpen(!open);

    const handleResponse = async (e) => { 
        const toastId = toast.loading('Submiting assignment...');
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdf.value;
        const note = form.note.value;
        const submitedAssignment = {
            asssignmentId: _id,
            title,
            mark,
            submitedDate: new Date().toLocaleDateString(),
            level,
            status: 'pending',
            pdf,
            note
        }
        
        const res = await axios.post(`/submited/assignments?email=${user.email}`, submitedAssignment);
        const data = await res.data;
        if(data.acknowledged){
            toast.success('Submited success.', {id: toastId});
        }else{
            toast.error('Inernal server error.', {id: toastId});
        }

        handleOpen();
    }

    useEffect(() => {
        axios.get(`/assignments/${id}?email=${user.email}`)
            .then(res => setAssignment(res.data));
    }, [axios, id, user.email])

    return (
        <div className="bg-blue-gray-50">
            <div className="container">
                <div className="max-w-screen-md bg-white px-5 pt-10 pb-5 mx-auto space-y-5 rounded-md">
                    <Typography variant="h3" className="text-center font-medium">{title}</Typography>
                    <div className="w-full h-[400px] rounded overflow-hidden">
                        <img className="w-full h-full object-cover" src={thumbnail} alt={title} />
                    </div>
                    <div className="space-y-5">
                        <Typography variant="paragraph" className="">{description}</Typography>
                        <div>
                            <Typography variant="h6" className="font-medium">Due Date: {dueDate}</Typography>
                            <Typography variant="h6" className="font-medium">Mark: {mark}</Typography>
                            <Typography variant="h6" className="font-medium">Level: {level}</Typography>
                            <Typography variant="h6" className="font-medium">Creator: {auth?.email}</Typography>
                        </div>
                        <Button onClick={() => setOpen(true)} className="capitalize w-full font-medium text-base py-2" color="blue">Take Assignment</Button>
                    </div>
                </div>
            </div>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className="justify-center">
                    <Typography variant="h5" className="font-medium text-center">Submit Assignment Response</Typography>
                </DialogHeader>
                <DialogBody>
                    <form onSubmit={handleResponse}>
                        <div className="space-y-5">
                            <div>
                                <Typography as='label' htmlFor='pdf' className="mb-2">Assignment PDF</Typography>
                                <Input required name="pdf" placeholder="Assignment PDF URL" id="pdf" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                            </div>
                            <div>
                                <Typography as='label' htmlFor='note' className="mb-2">Assignment Node</Typography>
                                <Textarea required name="note" placeholder="Assignment note" id="note" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                            </div>
                            <Button type="submit" className="capitalize font-medium py-2 text-base">Subbmit Response</Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default AssignmentDetails;