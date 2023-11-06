import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";
import { useState } from "react";


const Assignments = () => {
    const [page, setPage] = useState(1);
    const offset= useState(10);
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    

    const axios = useAxios();
    const url = `/assignments?level=${filterValue}&sort=mark&sortOrder=${sortValue}&page=${page}&offset=${offset}`;
    const getAssignments = async () => {
        const res = await axios.get(url);
        return res;
    }

    const query = useQuery({queryKey: ['assignments', sortValue, filterValue, page], queryFn: getAssignments});
    const count = query?.data?.data?.count;
    
    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsTitle setFilterValue={setFilterValue} setSortValue={setSortValue} title='All Assignments' />
            <AssignmentsContainer query={query} />
            <Pagination count={count
            } setPage={setPage} offset={offset} />
        </div>
    );
};

export default Assignments;