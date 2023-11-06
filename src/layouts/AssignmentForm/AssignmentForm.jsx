import { Button, Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const AssignmentForm = ({ title, description, assignment = {} }) => {
    return (
        <div className="container">
            <div className="max-w-2xl mx-auto">
                <div className="mb-5 space-y-1">
                    <Typography className="text-center" variant="h3">{title}</Typography>
                    <Typography className="font-normal text-center" variant="h5">{description}</Typography>
                </div>
                <form className="space-y-5">
                    <div>
                        <Typography as='label' htmlFor='title' className="mb-2">Assignment Title</Typography>
                        <Input name="title" defaultValue={assignment?.title ? assignment.title : ''} placeholder="Assignment Title" id="title" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div>
                        <Typography as='label' htmlFor='thumbnail' className="mb-2">Assignment Thumbnail</Typography>
                        <Input name="thumbnail" placeholder="Assignment Thumbnail URL" id="thumbnail" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-full">
                            <Typography as='label' htmlFor='mark' className="mb-2">Assignment Mark</Typography>
                            <Input name="mark" placeholder="Assignment Mark" id="mark" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <div className="w-full">
                            <Typography as='label' htmlFor='lavel' className="mb-2">Assignment Lavel</Typography>
                            <Select name="lavel" id="lavel" label="Select Lavel">
                                <Option value="easy">Easy</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="hard">Hard</Option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Typography as='label' htmlFor='description' className="mb-2">Assignment Description</Typography>
                        <Textarea name="description" placeholder="Assignment Description" id="description" className=" !border-t-blue-gray-200 focus:!border-t-gray-900" labelProps={{ className: "before:content-none after:content-none", }} />
                    </div>
                    <div className="flex items-center gap-5">
                        <Button type="submit" className="capitalize shadow-none hover:shadow-none" color="light-blue">Create</Button>
                        <Button type="button" className="capitalize shadow-none hover:shadow-none" color="red">Cancel</Button>
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