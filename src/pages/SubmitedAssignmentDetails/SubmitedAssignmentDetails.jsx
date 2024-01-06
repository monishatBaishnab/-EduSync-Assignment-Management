import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import toast from "react-hot-toast";
import PdfView from "../../layouts/PDF_VIEW/Pdf-view";
import { pdfjs } from 'react-pdf';
import useAxiosSecure from "../../hooks/useAxiosSecure";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();



const SubmitedAssignmentDetails = () => {
    const { id } = useParams();
    const axios = useAxiosSecure();
    const { user } = useAuth();
    const [submitedAssignment, setSubmiteAssignment] = useState({});
    const [open, setOpen] = useState(false);
    const [pdfOpen, setPdfOpen] = useState(false);
    const navigate = useNavigate();

    const { _id, title, mark, submitedDate, level, pdf, note, submitedUser } = submitedAssignment;

    const handleOpen = () => setOpen(!open);
    const handlePdfOpen = () => setPdfOpen(!pdfOpen);


    const handleResponse = async (e) => {
        e.preventDefault();
        const givenMark = e.target.mark.value;
        const feedback = e.target.mark.feedback;
        const toastId = toast.loading('Giving Mark...');
        const givenMarkObj = {
            status: 'complate',
            givenMark,
            feedback,
            givenMarkUser: user.email
        }
        if (givenMark <= mark) {
            try {
                const res = await axios.patch(`/submited/assignments/${_id}?email=${user.email}`, givenMarkObj);
                const data = await res.data;
                if (data.acknowledged) {
                    toast.success('Mark successfully given.', { id: toastId });
                    navigate('/submited');
                }
            } catch (error) {
                toast.error('Internal server error', { id: toastId });
            }
        } else {
            toast.error('Mark too high.', { id: toastId });
        }
        handleOpen();
    }

    useEffect(() => {
        const fetchSubmitedAssignment = async () => {
            try {
                const res = await axios.get(`/submited/assignments/${id}?email=${user.email}`);
                setSubmiteAssignment(res.data);
            } catch (error) {
                toast.error('Internal server error');
            }
        };

        fetchSubmitedAssignment();
    }, [id, axios, user])


    return (
        <div>
            <div className="container">
                <div className="max-w-screen-md bg-white px-5 pt-10 pb-5 mx-auto space-y-5 rounded-md">
                    <Typography variant="h3" className="text-center font-medium">{title ? title : ''}</Typography>
                    <div className="space-y-5">
                        <Typography variant="paragraph" className="">Submited Note: {note ? note : ''}</Typography>
                        <Typography variant="paragraph" className="">Submited PDF: <Typography as='span' onClick={(handlePdfOpen)} className="cursor-pointer text-light-orange inline-block">{pdf ? pdf.slice(5) : ''}</Typography></Typography>
                        <div>
                            <Typography variant="h6" className="font-medium">Due Date: {submitedDate ? submitedDate : ''}</Typography>
                            <Typography variant="h6" className="font-medium">Mark: {mark ? mark : ''}</Typography>
                            <Typography variant="h6" className="font-medium capitalize">Level: {level ? level : ''}</Typography>
                            <Typography variant="h6" className="font-medium">Creator: {submitedUser ? submitedUser : ''}</Typography>
                        </div>
                        <Button onClick={() => setOpen(true)} className="capitalize font-medium text-base py-2" color="blue">Give Mark</Button>
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
                                <Typography as='label' htmlFor='mark' className="mb-2">Mark</Typography>
                                <Input required name="mark" placeholder="Assignment Mark" id="mark" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                            </div>
                            <div>
                                <Typography as='label' htmlFor='feedback' className="mb-2">Feedback</Typography>
                                <Textarea required name="feedback" placeholder="feedback" id="feedback" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                            </div>
                            <Button type="submit" className="capitalize font-medium py-2 text-base">Give</Button>
                        </div>
                    </form>
                </DialogBody>
            </Dialog>
            <Dialog open={pdfOpen} handler={handlePdfOpen}>
                <DialogBody className="h-[calc(100vh_-_50px)] overflow-y-scroll overflow-x-hidden">
                    <PdfView pdfUrl={pdf} />
                </DialogBody>
            </Dialog>
        </div>
    );
};

export default SubmitedAssignmentDetails;