
import PropTypes from 'prop-types'
import LoadingAssignmentCard from '../../components/LoadingAssignmentCard';
import AssignmentCard from '../../components/AssignmentCard';

const AssignmentsContainer = ({ query = {}}) => {

    const { data: assignments, isLoading, refetch } = query || {};

    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                    {
                        isLoading ? <LoadingAssignmentCard /> :
                            assignments?.data?.assignments?.map(assignment => <AssignmentCard refetch={refetch} assignment={assignment} key={assignment._id} />)
                    }
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