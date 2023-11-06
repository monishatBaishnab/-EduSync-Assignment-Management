import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";
import { useState } from "react";


const Assignments = () => {
    // const assignments = useFetchAssignments('/assignments');
    const axios = useAxios();
    const [url, setUrl] = useState('/assignments');
    const getAssignments = async () => {
        const res = await axios.get(url);
        return res;
    }

    const query = useQuery({queryKey: ['assignments', url], queryFn: getAssignments});
    
    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsTitle setUrl={setUrl} title='All Assignments' />
            <AssignmentsContainer query={query} />
            <Pagination />
        </div>
    );
};

export default Assignments;