import { Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import FilterSeelct from "../../components/FilterSeelct";
import SortSelect from "../../components/SortSelect";

const AssignmentsTitle = ({ title, setFilterValue, setSortValue }) => {
    // Handle the filter selection and update the state.
    const handleFilter = (value) => {
        setFilterValue(value);
    }

    // Handle the sort selection and update the state
    const handleSort = (value) => {
        setSortValue(value);
    }

    return (
        <div className="container border-b py-5">
            <div className="flex justify-between flex-wrap">
                <Typography className="basis-full text-center mb-5 sm:mb-0 sm:text-start sm:basis-1/2" variant="h4">{title}</Typography>
                <div className="basis-full sm:basis-1/2 flex justify-center md:justify-end flex-wrap gap-3">
                    <div>
                        <FilterSeelct handleFilter={handleFilter} />
                    </div>
                    <div>
                        <SortSelect handleSort={handleSort} />
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