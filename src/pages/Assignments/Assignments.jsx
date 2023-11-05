import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";


const Assignments = () => {
    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsTitle />
            <AssignmentsContainer />
            <Pagination />
        </div>
    );
};

export default Assignments;