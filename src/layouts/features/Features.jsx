import { Typography } from "@material-tailwind/react";
import useLottieAnimation from "../../hooks/useLottieAnimation";
import { motion } from "framer-motion"

const Features = () => {
    const { collaboration, resource, marking, managemen } = useLottieAnimation();

    return (
        <div>
            <div className="container">
                <div className="flex items-center flex-col space-y-5 mb-10">
                    <Typography variant="h3">Empowering Your Learning Experience</Typography>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                    <motion.div
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: 'spring' }}
                        className="space-y-4 border p-5 rounded bg-white">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {collaboration}
                        </div>
                        <Typography variant="h5">User-Friendly Collaboration</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Facilitate seamless interaction and teamwork among users, providing them with tools to easily connect, discuss, and collaborate on various study-related activities.</Typography>
                    </motion.div>


                    <motion.div
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: 'spring' }}
                        className="space-y-4 border p-5 rounded bg-white">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {resource}
                        </div>
                        <Typography variant="h5">Resource Sharing</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph">Enable users to share and access a wide range of educational materials, such as notes, documents, and study resources, promoting knowledge sharing and enhancing the learning experience.</Typography>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: 'spring' }}
                        className="space-y-4 border p-5 rounded bg-white">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {marking}
                        </div>
                        <Typography variant="h5">Assignment Marking</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph"> Incorporate a grading system that allows users to evaluate and provide feedback on assignments, ensuring a fair and efficient assessment process.</Typography>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.1 }} 
                        transition={{ type: 'spring' }}
                        className="space-y-4 border p-5 rounded bg-white">
                        <div className="w-28 h-28 p-2 flex items-center justify-center bg-light-orange/25 rounded-sm">
                            {managemen}
                        </div>
                        <Typography variant="h5">Assignment Management</Typography>
                        <Typography className="text-blue-gray-500 font-normal" variant="paragraph"> Provide users with a comprehensive system to organize and track assignments, deadlines, and project progress, streamlining their academic workload and improving task management.</Typography>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Features;