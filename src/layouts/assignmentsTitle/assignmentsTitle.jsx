import { Option, Select, Typography } from "@material-tailwind/react";

const AssignmentsTitle = () => {
    const handleSeelct = (value) => {
        console.log(value);
    }
    return (
        <div className="container border-b py-5">
            <div className="flex justify-between">
                <Typography variant="h4">All Assignments</Typography>
                <div>
                    <Select containerProps={{ className: 'min-w-[100px]' }} onChange={handleSeelct} label="Label">
                        <Option value="easy">Easy</Option>
                        <Option value="medium">Medium</Option>
                        <Option value="hard">Hard</Option>
                    </Select>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsTitle;