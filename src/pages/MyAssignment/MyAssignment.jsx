import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import { useState } from "react";
import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";

const MyAssignment = () => {
    const [filterValue, setFilterValue] = useState('');
    const [sortValue, setSortValue] = useState('');
    
    const axios = useAxios();
    
    const { user } = useAuth();

    let url = `/assignments?email=${user.email}`;
    if(filterValue && sortValue){
        url = `/assignments?email=${user.email}&level=${filterValue}&sort=mark&sortOrder=${sortValue}`;
    }
    else if(sortValue){
        url = `/assignments?email=${user.email}?sort=mark&sortOrder=${sortValue}`;
    }
    else if(filterValue){
        url = `/assignments?email=${user.email}&level=${filterValue}`;
    }
    const getAssignments = async () => {
        const res = await axios.get(url);
        return res;
    }
    const queryKey =  ['assignments', sortValue, filterValue];
    const query = useQuery({ queryKey, queryFn: getAssignments });
    
    return (
        <div>
            <div className="bg-[#f7f8f9]">
                <AssignmentsTitle setFilterValue={setFilterValue} setSortValue={setSortValue} title='My Assignments' />
                <AssignmentsContainer page="delete" query={query} />
            </div>
        </div>
    );
};

export default MyAssignment;