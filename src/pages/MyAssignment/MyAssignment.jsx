import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Typography } from "@material-tailwind/react";
import NoDataFound from "../../components/NoDataFound";

const MyAssignment = () => {
    const axios = useAxios();
    const { user } = useAuth();

    const getSubmitdAssignments = async () => {
        const res = await axios.get(`/submited/assignments?email=${user.email}&submiterEmail=${user.email}`);
        return res.data;
    }
    const { data } = useQuery({ queryKey: ['submitedAssignments'], queryFn: getSubmitdAssignments });

    return (
        <div>
            <div className="container">
                {data?.length > 0 ?
                    <div className="overflow-x-scroll md:overflow-hidden">
                        <table className="w-full min-w-max table-auto text-left z-0">
                            <thead>
                                <tr>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Title </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Mark </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Marks awarded </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                        <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Staus </Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(submitedAssignment => {
                                    return (
                                        <tr key={submitedAssignment._id}>
                                            <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                <Typography variant="small" color="blue-gray" className="font-normal" >
                                                    {
                                                        submitedAssignment.title
                                                    }
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                <Typography variant="small" color="blue-gray" className="font-normal" >
                                                    {
                                                        submitedAssignment.mark
                                                    }
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                <Typography variant="small" color="blue-gray" className="font-normal" >
                                                    {
                                                        submitedAssignment.givenMark ? `${submitedAssignment.givenMark} out of ${submitedAssignment.mark}` : 'Processing...'
                                                    }
                                                </Typography>
                                            </td>
                                            <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                <Typography variant="small" color="blue-gray" className="font-normal" >
                                                    {
                                                        submitedAssignment.status
                                                    }
                                                </Typography>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    : <NoDataFound />}
            </div>
        </div>
    );
};

export default MyAssignment;