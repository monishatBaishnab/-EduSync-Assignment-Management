import { Typography } from "@material-tailwind/react";
import useLottieAnimation from "../../hooks/useLottieAnimation";

const Features = () => {
    const { collaboration, resource, marking, managemen } = useLottieAnimation();

    return (
        <div>
            <div className="container">
                <div className="flex items-center flex-col space-y-5 mb-10">
                    <Typography variant="h3">Empowering Your Learning Experience</Typography>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4 border p-5 rounded">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {collaboration}
                        </div>
                        <Typography variant="h5">User-Friendly Collaboration</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="p">Facilitate seamless interaction and teamwork among users, providing them with tools to easily connect, discuss, and collaborate on various study-related activities.</Typography>
                    </div>
                    <div className="space-y-4 border p-5 rounded">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {resource}
                        </div>
                        <Typography variant="h5">Resource Sharing</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="p">Enable users to share and access a wide range of educational materials, such as notes, documents, and study resources, promoting knowledge sharing and enhancing the learning experience.</Typography>
                    </div>
                    <div className="space-y-4 border p-5 rounded">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {marking}
                        </div>
                        <Typography variant="h5">Assignment Marking</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="p"> Incorporate a grading system that allows users to evaluate and provide feedback on assignments, ensuring a fair and efficient assessment process.</Typography>
                    </div>
                    <div className="space-y-4 border p-5 rounded">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {managemen}
                        </div>
                        <Typography variant="h5">Assignment Management</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="p"> Provide users with a comprehensive system to organize and track assignments, deadlines, and project progress, streamlining their academic workload and improving task management.</Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;