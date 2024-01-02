import { Typography } from "@material-tailwind/react";
import FeatureCard from "./FeatureCard";
import useLottieAnimation from "../../../hooks/useLottieAnimation";

const Features = () => {
    const { collaboration, resource, marking, managemen } = useLottieAnimation();
    const features = [
        {
            id: 1,
            title: 'User-Friendly Collaboration',
            desc: 'Enhance teamwork and interaction with tools for seamless connection and collaboration on study-related activities.',
            icon: collaboration,
        },
        {
            id: 2,
            title: 'Resource Sharing',
            desc: 'Enable easy sharing and access to educational materials, promoting knowledge exchange for an improved learning experience.',
            icon: resource,
        },
        {
            id: 3,
            title: 'Assignment Marking',
            desc: 'Implement a grading system for efficient assessment, allowing users to evaluate and provide feedback on assignments.',
            icon: marking,
        },
        {
            id: 4,
            title: 'Assignment Management',
            desc: 'Provide a comprehensive system for organizing assignments, deadlines, and project progress, streamlining academic workload and task management.',
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