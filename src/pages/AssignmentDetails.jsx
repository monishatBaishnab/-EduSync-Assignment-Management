import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import DetailsContainer from "../components/Details/DetailsContainer";
import DetailsSkeliton from "../components/SharedComponents/SkelitonLoader/DetailsSkeliton";
const AssignmentDetails = () => {
    const { id } = useParams();
    const axios = useAxiosSecure();

    const { data: assignment, isLoading } = useQuery({ queryKey: ['details'], queryFn: () => fetchData(axios, `/assignments/${id}`) })

    return (
        <div className="bg-blue-gray-50">
            {isLoading ? <DetailsSkeliton /> : <DetailsContainer assignment={assignment} />}
        </div>
    );
};

export default AssignmentDetails;