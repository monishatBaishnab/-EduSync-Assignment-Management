import PropTypes from 'prop-types';
import { Button, Chip, Typography } from "@material-tailwind/react";
import { formatDate } from '../../utils/dateManipulation';
import EmptySolutions from '../SharedComponents/Empty/EmptySolutions';

const SolutionCard = ({ solution }) => {
    const formatedDate = formatDate(solution?.submissionDate);
    return (
        <div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img className="w-full h-full object-cover" src={solution?.solver?.image} alt={solution?.author?.name} />
                    </div>
                    <div>
                        <Typography as='span' className="font-medium">{solution?.solver?.name}</Typography>
                        <Typography as='span' className="text-sm text-blue-gray-600">{formatedDate}</Typography>
                    </div>
                </div>
                <div className="border-l pl-5">
                    <Button variant="text" size="sm" color="blue" className="shadow-none hover:shadow-none">Details</Button>
                </div>
            </div>
            <div className="ml-14 mt-2">
                <Typography className="text-blue-gray-600">{solution?.explanation}</Typography>
            </div>
        </div>
    )
}

SolutionCard.propTypes = {
    solution: PropTypes.object,
}

const SolutionsContainer = ({ solutions, isSolutionFetchning }) => {

    return (
        <div className={`${isSolutionFetchning && 'opacity-60'}`}>
            <div className="bg-white p-5 rounded space-y-5">
                <Typography variant="h5" className="font-medium flex items-center gap-2 border-b pb-4">Solutions <Chip size="sm" value={solutions?.length} className="bg-light-orange" /></Typography>
                {
                    solutions?.length ?
                        <>
                            <div className="space-y-8">
                                {solutions?.map(solution => <SolutionCard key={solution?._id} solution={solution} />)}
                            </div>
                            <div className="border-t text-center pt-4">
                                <button className="px-4 text-light-blue-500">Show All</button>
                            </div>
                        </>
                        :
                        <EmptySolutions />
                }

            </div>
        </div>
    );
};

SolutionsContainer.propTypes = {
    solutions: PropTypes.array,
    isSolutionFetchning: PropTypes.object,
}

export default SolutionsContainer;