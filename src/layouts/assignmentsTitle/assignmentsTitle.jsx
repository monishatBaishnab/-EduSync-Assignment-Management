import { Option, Select, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const AssignmentsTitle = ({title}) => {
    const handleSeelct = (value) => {
        console.log(value);
    }
    return (
        <div className="container border-b py-5">
            <div className="flex justify-between">
                <Typography variant="h4">{title}</Typography>
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

AssignmentsTitle.propTypes = {
    title: PropTypes.string,
}

export default AssignmentsTitle;