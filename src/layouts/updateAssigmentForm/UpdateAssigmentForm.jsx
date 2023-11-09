import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAxios from "../../hooks/useAxios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateAssignmentForm = ({ title, description, assignment = {} }) => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const [lavel, setLavel] = useState('');
    const axios = useAxios();
    const navigate = useNavigate();

    // Destructuring assignment object for initialization
    const {
        _id,
        title: oldTitle,
        thumbnail: oldThumbnail,
        mark: oldMark,
        description: oldDescription,
        level: oldlevel,
        dueDate: oldDueDate,
        user: auth
    } = assignment || {};

    const date = startDate.toLocaleDateString();

    // Initialize the date to oldDueDate if available, or the current date
    useEffect(() => {
        setStartDate(new Date(oldDueDate ? oldDueDate : date));
    }, [oldDueDate])

    // Set the level from oldLevel
    useEffect(() => {
        setLavel(oldlevel)
    }, [oldlevel]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = user.email;

        const form = new FormData(e.currentTarget);

        const title = form.get('title');
        const thumbnail = form.get('thumbnail');
        const mark = form.get('mark');
        const description = form.get('description');
        const dueDate = new Date(startDate).toLocaleDateString();

        const toastId = toast.loading('Updating Assignment....');

        // Create assignmentData object for the request payload
        const assignment = {
            title,
            thumbnail,
            mark: parseInt(mark),
            description,
            level: lavel,
            dueDate,
            user: {
                email
            }
        }

        if (title && thumbnail && mark && description && lavel && startDate) {
            try {
                const res = await axios.put(`/assignments/${_id}?email=${email}&assignmentEmail=${auth.email}`, assignment);
                const data = await res.data;
                if (data?.acknowledged) {
                    toast.success('Assignment Updated.', { id: toastId });
                    e.target.reset();
                    setLavel('');
                    setStartDate(new Date());
                    navigate('/assignments');
                }
            } catch (error) {
                console.log(error);
                if(error?.response?.data?.error){
                    toast.error(error?.response?.data?.error, { id: toastId })
                }
                toast.error("Unauthorized access.", { id: toastId })
            }
        } else {
            toast.error('Fill all input field.', { id: toastId })
        }
    }
    return (
        <div className="container">
            <div className="max-w-2xl mx-auto">
                <div className="mb-5 space-y-1">
                    <Typography className="text-center" variant="h3">{title ? title : ''}</Typography>
                    <Typography className="font-normal text-center" variant="h5">{description ? description : ''}</Typography>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <Typography as='label' htmlFor='title' className="mb-2">Assignment Title</Typography>
                        <Input required name="title" defaultValue={oldTitle ? oldTitle : ''} placeholder="Assignment Title" id="title" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='thumbnail' className="mb-2">Assignment Thumbnail</Typography>
                            <Input defaultValue={oldThumbnail ? oldThumbnail : ''} required name="thumbnail" placeholder="Assignment Thumbnail URL" id="thumbnail" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='lavel' className="mb-2">Due date</Typography>
                            <DatePicker className="border !w-full px-4 py-2 rounded-md border-blue-gray-200" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='mark' className="mb-2">Assignment Mark</Typography>
                            <Input defaultValue={oldMark ? oldMark : ''} required name="mark" placeholder="Assignment Mark" id="mark" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='lavel' className="mb-2">Assignment Lavel</Typography>
                            <Select value={oldlevel ? oldlevel : ''} onChange={(value) => setLavel(value)} id="lavel" label="Select Lavel">
                                <Option value="easy">Easy</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="hard">Hard</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Typography as='label' htmlFor='description' className="mb-2">Assignment Description</Typography>
                        <Textarea defaultValue={oldDescription ? oldDescription : ''} required name="description" placeholder="Assignment Description" id="description" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5">
                        <Button type="submit" className="capitalize shadow-none hover:shadow-none" color="light-blue">Update</Button>
                        <Button onClick={() => navigate('/assignments')} type="button" className="capitalize shadow-none hover:shadow-none" color="red">Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

UpdateAssignmentForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    assignment: PropTypes.object,
}

export default UpdateAssignmentForm;