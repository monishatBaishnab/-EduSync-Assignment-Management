import AssignmentsContainer from "../components/Assignments/AssignmentsContainer";

const Assignments = () => {
    return (
        <div className="bg-[#f7f8f9]">
            {/* <AssignmentsTitle setFilterValue={setFilterValue} setSortValue={setSortValue} title='All Assignments' /> */}
            <AssignmentsContainer />
        </div>
    );
};

export default Assignments;