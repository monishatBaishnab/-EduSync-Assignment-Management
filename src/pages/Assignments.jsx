import { useQuery } from "@tanstack/react-query";
import AssignmentsContainer from "../components/Assignments/AssignmentsContainer";
import { fethSolutions } from "../utils/assignments";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Assignments = () => {
    // const { signOutUser } = useAuth();
    // const navigate = useNavigate();

    // const fetchData = async () => {
    //     try {
    //         const result = await fethSolutions();
    //         return result;
    //     } catch (error) {
    //         toast.error('An error occurred');
    //         await signOutUser();
    //         navigate('/signin')
    //         return { error: "An error occurred while fetching data." };
    //     }
    // };

    // const { data: sss} = useQuery({ queryKey: ['ss'], queryFn: fetchData });


    return (
        <div className="bg-[#f7f8f9]">
            <AssignmentsContainer />
        </div>
    );
};

export default Assignments;