import PropTypes from 'prop-types'
import AssignmentCard from '../../components/AssignmentCard';
import SkeletonLoader from './SkeletonLoader';

const AssignmentsContainer = ({ query = {}}) => {

    const { data: assignments, isLoading, refetch } = query || {};

    return (
        <div>
            <div className="container">
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
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