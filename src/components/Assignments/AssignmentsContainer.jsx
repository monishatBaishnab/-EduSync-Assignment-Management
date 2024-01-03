import PropTypes from 'prop-types'
import AssignmentCard from './AssignmentCard';
import FilterPanel from './FilterPanel';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Pagination from './Pagination';
import AssignmentsSkeliton from '../SharedComponents/SkelitonLoader/AssignmentsSkeliton';

const AssignmentsContainer = () => {
    // State for the current page and items per page
    const [page, setPage] = useState(1);
    const offset = 9;

    // State for filtering and sorting assignments
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');


    const axios = useAxios();
    // Construct the API URL based on filter, sort, and pagination settings
    const url = `/assignments?level=${filterValue}&sort=mark&sortOrder=${sortValue === 'ascending' ? 'asc' : 'desc'}&page=${page}&offset=${offset}`;

    // Function to fetch assignments data
    const getAssignments = async () => {
        const res = await axios.get(url);
        return res;
    }

    // Define the query key
    const queryKey = ['assignments', sortValue, filterValue, page];

    // Use React Query to fetch and cache data
    const { data: assignments, isLoading, refetch } = useQuery({ queryKey, queryFn: getAssignments });
    const count = assignments?.data?.count;

    return (
        <div>
            <div className="container">
                <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div>
                        <FilterPanel states={{filterValue, setFilterValue, sortValue, setSortValue}} />
                    </div>
                    <div className='md:col-span-2 lg:col-span-3'>
                        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                isLoading ? <AssignmentsSkeliton /> :
                                    assignments?.data?.assignments?.map(assignment => <AssignmentCard refetch={refetch} assignment={assignment} key={assignment._id} />)
                            }
                        </div>
                        <Pagination count={count} setPage={setPage} offset={offset} />
                    </div>
                </div>
            </div>
        </div>
    );
};

AssignmentsContainer.propTypes = {
    query: PropTypes.object,
    page: PropTypes.string,
}

export default AssignmentsContainer;