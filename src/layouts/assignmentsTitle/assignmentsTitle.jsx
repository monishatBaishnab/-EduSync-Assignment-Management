import { Option, Select, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const AssignmentsTitle = ({ title }) => {
    const handleSeelct = (value) => {
        console.log(value);
    }
    return (
        <div className="container border-b py-5">
            <div className="flex justify-between flex-wrap">
                <Typography className="basis-full text-center mb-5 sm:mb-0 sm:text-start sm:basis-1/2" variant="h4">{title}</Typography>
                <div className="basis-full sm:basis-1/2 flex justify-center">
                    <div className="w-[100px] md:ml-auto">
                        <Select containerProps={{ className: '!min-w-[100px]' }} onChange={handleSeelct} label="Label">
                            <Option value="easy">Easy</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="hard">Hard</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

AssignmentsTitle.propTypes = {
    title: PropTypes.string,
}

export default AssignmentsTitle;