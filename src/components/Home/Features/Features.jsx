import { Typography } from "@material-tailwind/react";
import FeatureCard from "./FeatureCard";
import useLottieAnimation from "../../../hooks/useLottieAnimation";

const Features = () => {
    const { collaboration, resource, marking, managemen } = useLottieAnimation();
    const features = [
        {
            id: 1,
            title: 'User-Friendly Collaboration',
            desc: 'Facilitate seamless interaction and teamwork among users, providing them with tools to easily connect, discuss, and collaborate on various study-related activities.',
            icon: collaboration,
        },
        {
            id: 2,
            title: 'Resource Sharing',
            desc: 'Enable users to share and access a wide range of educational materials, such as notes, documents, and study resources, promoting knowledge sharing and enhancing the learning experience.',
            icon: resource,
        },
        {
            id: 3,
            title: 'Assignment Marking',
            desc: 'Incorporate a grading system that allows users to evaluate and provide feedback on assignments, ensuring a fair and efficient assessment process.',
            icon: marking,
        },
        {
            id: 4,
            title: 'Assignment Management',
            desc: 'Provide users with a comprehensive system to organize and track assignments, deadlines, and project progress, streamlining their academic workload and improving task management.',
            icon: managemen,
        },
    ];

    return (
        <div>
            <div className="container">
                <div className="flex items-center flex-col space-y-5 mb-10">
                    <Typography variant="h3">Empowering Your Learning Experience</Typography>
                </div>
                <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {
                        features.map(feature => <FeatureCard key={feature.id} item={feature} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;