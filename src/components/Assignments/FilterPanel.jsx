import PropTypes from 'prop-types';
import FilterOption from './FilterOption';
import { levelFilter, sortValue } from '../../utils/filterOptionsData';


const FilterPanel = ({ states }) => {
    const { setFilterValue, setSortValue } = states || {};

    return (
        <div className='bg-white p-5 border rounded'>
            <FilterOption title={"Sort Assignments"} items={sortValue} action={setSortValue} />
            <FilterOption title={"Filter by Level"} items={levelFilter} action={setFilterValue} />
        </div>
    );
};

FilterPanel.propTypes = {
    states: PropTypes.object,
}


export default FilterPanel;