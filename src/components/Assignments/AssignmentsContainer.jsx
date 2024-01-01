import PropTypes from 'prop-types'
import SkeletonLoader from './SkeletonLoader';
import AssignmentCard from './AssignmentCard';

const AssignmentsContainer = ({ query = {}}) => {

    const { data: assignments, isLoading, refetch } = query || {};

    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {
                        isLoading ? <SkeletonLoader /> :
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