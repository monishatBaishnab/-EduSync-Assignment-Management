import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import DetailsContainer from "../components/Details/DetailsContainer";
import DetailsSkeliton from "../components/SharedComponents/SkelitonLoader/DetailsSkeliton";
import SolutionsContainer from "../components/Details/SolutionsContainer";


const AssignmentDetails = () => {
    const { id } = useParams();
    const axios = useAxiosSecure();
    const { data: assignment, isLoading } = useQuery({ queryKey: ['details', id], queryFn: () => fetchData(axios, `/assignments/${id}`) })

    const { data: solutions, isLoading: solutionsLoading, refetch: solutionRefetch, isFetching: isSolutionFetchning } = useQuery({ queryKey: ['solutions', assignment?._id], queryFn: () => fetchData(axios, `/solutions?id=${assignment?._id}&offset=3`), enabled: !!assignment?._id });
 
    return (
        <div className="bg-blue-gray-50">
            <div className="container space-y-5">
                {isLoading ? <DetailsSkeliton /> : <DetailsContainer solutionRefetch={solutionRefetch} assignment={assignment} />}
                <div>
                    {solutionsLoading || <SolutionsContainer isSolutionFetchning={isSolutionFetchning} solutions={solutions} />}
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;