import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { IconButton, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import { AiOutlineEye } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NoDataFound from "../../components/NoDataFound";

const SubmitedAssignment = () => {
    const axios = useAxios();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [status, setStutus] = useState('pending');

    const getSubmitdAssignments = async () => {
        const res = await axios.get(`/submited/assignments?email=${user.email}&status=${status}`);
        return res.data;
    }
    const { data } = useQuery({ queryKey: ['submitedAssignments', status], queryFn: getSubmitdAssignments });


    return (
        <div className="container">
            <div className="container">
                <Tabs value="pending">
                    <TabsHeader className="z-0">
                        <Tab value='pending' onClick={() => setStutus('pending')}>
                            Pending
                        </Tab>
                        <Tab value='complate' onClick={() => setStutus('complate')}>
                            Complate
                        </Tab>
                    </TabsHeader>
                    <TabsBody className="z-0">
                        <TabPanel value='pending'>
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
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Assignment Submitter </Typography>
                                                </th>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Action </Typography>
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
                                                                    submitedAssignment.submitedUser
                                                                }
                                                            </Typography>
                                                        </td>
                                                        <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                            <Typography variant="small" color="blue-gray" className="font-normal" >
                                                                <IconButton color="light-blue" onClick={() => navigate(`/submitedDetails/${submitedAssignment._id}`)}>
                                                                    <AiOutlineEye className="text-xl" />
                                                                </IconButton>
                                                            </Typography>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                : <NoDataFound />}
                        </TabPanel>
                    </TabsBody>
                    <TabsBody className="z-0">
                        <TabPanel value='complate'>
                            {data?.length > 0 ?
                                <div className="overflow-x-scroll md:overflow-hidden">
                                    <table className="w-full min-w-max table-auto text-left z-0">
                                        <thead>
                                            <tr>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Title </Typography>
                                                </th>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Marks awarded </Typography>
                                                </th>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Assignment Submitter </Typography>
                                                </th>
                                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center" >
                                                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70"> Mark provider </Typography>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.map(submitedAssignment => {
                                                return (
                                                    <tr key={submitedAssignment._id}>
                                                        <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                            <span color="blue-gray" className="font-normal" >
                                                                {
                                                                    submitedAssignment.title
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                            <span color="blue-gray" className="font-normal" >
                                                                {
                                                                    `${submitedAssignment.givenMark} out of ${submitedAssignment.mark}`
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                            <span color="blue-gray" className="font-normal" >
                                                                {
                                                                    submitedAssignment.submitedUser
                                                                }
                                                            </span>
                                                        </td>
                                                        <td className='p-4 border-b border-blue-gray-50 w-1/4 text-center'>
                                                            <span color="blue-gray" className="font-normal" >
                                                                {
                                                                    submitedAssignment.givenMarkUser
                                                                }
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                : <NoDataFound />}
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
};

export default SubmitedAssignment;