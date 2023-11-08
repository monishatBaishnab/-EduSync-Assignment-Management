import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";
import { useState } from "react";


const Assignments = () => {
    // State for the current page and items per page
    const [page, setPage] = useState(1);
    const offset= 10;

    // State for filtering and sorting assignments
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    

    const axios = useAxios();
     // Construct the API URL based on filter, sort, and pagination settings
    const url = `/assignments?level=${filterValue}&sort=mark&sortOrder=${sortValue}&page=${page}&offset=${offset}`;

    // Function to fetch assignments data
    const getAssignments = async () => {
        const res = await axios.get(url);
        return res;
    }

    // Define the query key
    const queryKey = ['assignments', sortValue, filterValue, page];

    // Use React Query to fetch and cache data
    const query = useQuery({queryKey, queryFn: getAssignments});
    const count = query?.data?.data?.count;
    
    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsTitle setFilterValue={setFilterValue} setSortValue={setSortValue} title='All Assignments' />
            <AssignmentsContainer query={query} />
            <Pagination count={count} setPage={setPage} offset={offset} />
        </div>
    );
};

export default Assignments;