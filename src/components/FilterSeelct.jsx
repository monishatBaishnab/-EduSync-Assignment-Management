import { Option, Select } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const FilterSeelct = ({handleFilter}) => {
    return (
        <div className="w-[100px] md:ml-auto">
            <Select containerProps={{ className: '!min-w-[100px]' }} onChange={handleFilter} label="Filter">
                <Option value="">All</Option>
                <Option value="easy">Easy</Option>
                <Option value="medium">Medium</Option>
                <Option value="hard">Hard</Option>
            </Select>
        </div>
    );
};

FilterSeelct.propTypes = {
    handleFilter: PropTypes.func,
}

export default FilterSeelct;