import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAxios from "../../hooks/useAxios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";




const AssignmentForm = ({ title, description, assignment = {} }) => {
    const { user } = useAuth();
    const [lavel, setLavel] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const axios = useAxios();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = user.email;
        const form = new FormData(e.currentTarget);
        const title = form.get('title');
        const thumbnail = form.get('thumbnail');
        const mark = form.get('mark');
        const description = form.get('description');
        const dueDate = new Date(startDate).toLocaleDateString();
    
        const toastId = toast.loading('Adding Assignment....');

        const assignment = {
            title,
            thumbnail,
            mark: parseInt(mark),
            description,
            lavel,
            dueDate,
            user: {
                email
            }
        }

        if (title && thumbnail && mark && description && lavel && startDate) {
           
            try {
                const res = await axios.post(`http://localhost:5000/api/v1/assignments?email=${email}`, assignment);
                const data = await res.data;
                if(data?.acknowledged){
                    toast.success('Assignment Addedd.', {id: toastId});
                    e.target.reset();
                    setLavel('');
                    setStartDate(new Date());
                }
            } catch (error) {
                console.log(error);
                toast.error('Internal server error.', {id: toastId})
            }
        }

    }
    return (
        <div className="container">
            <div className="max-w-2xl mx-auto">
                <div className="mb-5 space-y-1">
                    <Typography className="text-center" variant="h3">{title}</Typography>
                    <Typography className="font-normal text-center" variant="h5">{description}</Typography>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <Typography as='label' htmlFor='title' className="mb-2">Assignment Title</Typography>
                        <Input required name="title" defaultValue={assignment?.title ? assignment.title : ''} placeholder="Assignment Title" id="title" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='thumbnail' className="mb-2">Assignment Thumbnail</Typography>
                            <Input required name="thumbnail" placeholder="Assignment Thumbnail URL" id="thumbnail" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='lavel' className="mb-2">Due date</Typography>
                            <DatePicker className="border !w-full px-4 py-2 rounded-md border-blue-gray-200" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 flex-wrap">
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='mark' className="mb-2">Assignment Mark</Typography>
                            <Input required name="mark" placeholder="Assignment Mark" id="mark" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="w-full basis-full md:basis-[calc(50%_-_10px)]">
                            <Typography as='label' htmlFor='lavel' className="mb-2">Assignment Lavel</Typography>
                            <Select onChange={(value) => setLavel(value)} name="lavel" id="lavel" label="Select Lavel">
                                <Option value="easy">Easy</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="hard">Hard</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Typography as='label' htmlFor='description' className="mb-2">Assignment Description</Typography>
                        <Textarea required name="description" placeholder="Assignment Description" id="description" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5">
                        <Button type="submit" className="capitalize shadow-none hover:shadow-none" color="light-blue">Create</Button>
                        <Button onClick={() => navigate('/')} type="button" className="capitalize shadow-none hover:shadow-none" color="red">Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

AssignmentForm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    assignment: PropTypes.object,
}

export default AssignmentForm;