import { Option, Select, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const AssignmentsTitle = ({ title, setFilterValue, setSortValue }) => {

    const handleFilter = (value) => {
        setFilterValue(value);
    }
    const handleSort = (value) => {
        setSortValue(value);
    }



    return (
        <div className="container border-b py-5">
            <div className="flex justify-between flex-wrap">
                <Typography className="basis-full text-center mb-5 sm:mb-0 sm:text-start sm:basis-1/2" variant="h4">{title}</Typography>
                <div className="basis-full sm:basis-1/2 flex justify-end">
                    <div className="w-[100px] md:ml-auto">
                        <Select containerProps={{ className: '!min-w-[100px]' }} onChange={handleFilter} label="Filter">
                            <Option value="">All</Option>
                            <Option value="easy">Easy</Option>
                            <Option value="medium">Medium</Option>
                            <Option value="hard">Hard</Option>
                        </Select>
                    </div>
                    <div className="w-[200px] ml-5">
                        <Select containerProps={{ className: '!min-w-[200px]' }} onChange={handleSort} label="Sort">
                            <Option value="">No Filter</Option>
                            <Option value="asc">Ascending</Option>
                            <Option value="desc">Descending</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};

AssignmentsTitle.propTypes = {
    title: PropTypes.string,
    setFilterValue: PropTypes.func,
    setSortValue: PropTypes.func,
}

export default AssignmentsTitle;