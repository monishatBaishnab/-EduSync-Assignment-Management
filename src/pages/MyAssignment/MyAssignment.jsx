import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Typography } from "@material-tailwind/react";
import NoDataFound from "../../components/NoDataFound";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { useState } from "react";
import bronze from '../../assets/badge/Bronze.png';
import silver from '../../assets/badge/Silver.png';
import gold from '../../assets/badge/Gold.png';

const MyAssignment = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const [totalSubmite, setTotalSubmit] = useState(0);

    const getSubmitdAssignments = async () => {
        const res = await axios.get(`/submited/assignments?email=${user.email}&submiterEmail=${user.email}`);
        return res.data;
    }
    const getSubmitdAssignmentsCount = async () => {
        const res = await axios.get(`/submited/assignments/group`);
        const sumOfAssignments = res?.data?.reduce((total, item) => total + parseInt(item?.count), 0);
        setTotalSubmit(sumOfAssignments);
        return res.data;
    }
    const { data } = useQuery({ queryKey: ['submitedAssignments'], queryFn: getSubmitdAssignments });
    const { data: count } = useQuery({ queryKey: ['submitedAssignmentsCount'], queryFn: getSubmitdAssignmentsCount });

    let badge = 'Bronze';
    if (totalSubmite >= 10) {
        badge = 'Silver';
    }
    else if (totalSubmite >= 20) {
        badge = 'Gold';
    }

    return (
        <div>
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-2 mb-5">
                    <div>
                        <Typography variant="h5" color="blue" className="text-center">Profile Status</Typography>
                        <div className="flex flex-col gap-2 items-center my-5">
                            <div className="overflow-hidden w-[100px] h-[100px] rounded-full">
                                <img className="w-full h-full object-cover" src={user?.photoURL} alt={user?.displayName} />
                            </div>
                            <div className="flex flex-col items-center">
                                <Typography variant="h6" className="font-medium">{user?.displayName}</Typography>
                                <Typography variant="h6" className="font-medium">{user?.email}</Typography>
                                <div className={`flex items-center mt-4 ${badge === 'Bronze' ? 'bg-[#CD7F32]/10 px-4 py-2 rounded-md text-[#CD7F32]' : badge === 'Silver' ? 'bg-[#C0C0C0]/10 px-4 py-2 rounded-md text-[#C0C0C0]' : 'bg-[#FFD700]/10 px-4 py-2 rounded-md text-[#FFD700]'}`}>
                                    <div className="w-10 h-10 overflow-hidden">
                                        <img className="h-full w-full object-contain" src={badge === 'Bronze' ? bronze : badge === 'Silver' ? silver : gold} alt={badge} />
                                    </div>
                                    {badge}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart width={600} height={300} data={count}>
                                <Line type="monotone" dataKey="count" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                        <Typography variant="h5" color="blue" className="text-center">Submission Status</Typography>
                    </div>
                </div>

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