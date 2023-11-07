import { Option, Select } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const SortSelect = ({ handleSort }) => {
    return (
        <div className="w-[200px]">
            <Select containerProps={{ className: '!min-w-[200px]' }} onChange={handleSort} label="Sort">
                <Option value="">No Filter</Option>
                <Option value="asc">Ascending</Option>
                <Option value="desc">Descending</Option>
            </Select>
        </div>
    );
};

SortSelect.propTypes = {
    handleSort: PropTypes.func,
}

export default SortSelect;