import { useParams } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../utils/fetchData";
import DetailsContainer from "../components/Details/DetailsContainer";
import DetailsSkeliton from "../components/SharedComponents/SkelitonLoader/DetailsSkeliton";
import { Button, Chip, Typography } from "@material-tailwind/react";

const AssignmentDetails = () => {
    const { id } = useParams();
    const axios = useAxiosSecure();
    const { data: assignment, isLoading } = useQuery({ queryKey: ['details', id], queryFn: () => fetchData(axios, `/assignments/${id}`) })

    return (
        <div className="bg-blue-gray-50">
            <div className="container space-y-5">
                {isLoading ? <DetailsSkeliton /> : <DetailsContainer assignment={assignment} />}
                <div>
                    <div className="bg-white p-5 rounded space-y-5">
                        <Typography variant="h5" className="font-medium flex items-center gap-2 border-b pb-4">Solutions <Chip size="sm" value='10' className="bg-light-orange" /></Typography>
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden"><img className="w-full h-full object-cover" src="https://i.ibb.co/J5YphPK/fb-prfile.jpg" alt="" /></div>
                                        <div>
                                            <Typography as='span' className="font-medium">Monishat Baishnab</Typography>
                                            <Typography as='span' className="text-sm text-blue-gray-600">15th Mar 2024</Typography>
                                        </div>
                                    </div>
                                    <div className="border-l pl-5">
                                        <Button variant="text" size="sm" color="blue" className="shadow-none hover:shadow-none">Details</Button>
                                    </div>
                                </div>
                                <div className="ml-14 mt-2">
                                    <Typography className="text-blue-gray-600">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</Typography>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden"><img className="w-full h-full object-cover" src="https://i.ibb.co/J5YphPK/fb-prfile.jpg" alt="" /></div>
                                        <div>
                                            <Typography as='span' className="font-medium">Monishat Baishnab</Typography>
                                            <Typography as='span' className="text-sm text-blue-gray-600">15th Mar 2024</Typography>
                                        </div>
                                    </div>
                                    <div className="border-l pl-5">
                                        <Button variant="text" size="sm" color="blue" className="shadow-none hover:shadow-none">Details</Button>
                                    </div>
                                </div>
                                <div className="ml-14 mt-2">
                                    <Typography className="text-blue-gray-600">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</Typography>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-12 h-12 rounded-full overflow-hidden"><img className="w-full h-full object-cover" src="https://i.ibb.co/J5YphPK/fb-prfile.jpg" alt="" /></div>
                                        <div>
                                            <Typography as='span' className="font-medium">Monishat Baishnab</Typography>
                                            <Typography as='span' className="text-sm text-blue-gray-600">15th Mar 2024</Typography>
                                        </div>
                                    </div>
                                    <div className="border-l pl-5">
                                        <Button variant="text" size="sm" color="blue" className="shadow-none hover:shadow-none">Details</Button>
                                    </div>
                                </div>
                                <div className="ml-14 mt-2">
                                    <Typography className="text-blue-gray-600">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="border-t text-center pt-4">
                            <button className="px-4 text-light-blue-500">Show All</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;