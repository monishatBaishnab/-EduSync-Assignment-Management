import AssignmentsContainer from "../../layouts/assignmentsContainer/AssignmentsContainer";
import AssignmentsTitle from "../../layouts/assignmentsTitle/assignmentsTitle";
import Pagination from "../../layouts/pagination/Pagination";

const MyAssignment = () => {
    return (
        <div>
            <div className="bg-[#f7f8f9]">
                <AssignmentsTitle title='My Assignments' />
                <AssignmentsContainer />
                <Pagination />
            </div>
        </div>
    );
};

export default MyAssignment;