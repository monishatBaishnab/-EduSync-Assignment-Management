import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";


const Assignments = () => {
    // const assignments = useFetchAssignments('/assignments');
    const axios = useAxios();
    const getAssignments = async () => {
        const res = await axios.get('/assignments');
        return res;
    }

    const query = useQuery({queryKey: ['assignments'], queryFn: getAssignments})
   
    // console.log(assignments);
    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsTitle title='All Assignments' />
            <AssignmentsContainer query={query} />
            <Pagination />
        </div>
    );
};

export default Assignments;