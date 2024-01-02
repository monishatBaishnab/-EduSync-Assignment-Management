import PropTypes from 'prop-types';
import FilterOption from './FilterOption';
import { levelFilter, sortValue } from '../../utils/filterOptionsData';


const FilterPanel = ({ states }) => {
    const { setFilterValue, setSortValue } = states || {};

    return (
        <div>
            <FilterOption title={"Filter by Level"} items={levelFilter} action={setFilterValue} />
            <FilterOption title={"Sort Assignments"} items={sortValue} action={setSortValue} />
        </div>
    );
};

FilterPanel.propTypes = {
    states: PropTypes.object,
}


export default FilterPanel;