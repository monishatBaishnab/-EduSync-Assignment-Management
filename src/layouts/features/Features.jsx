import { Typography } from "@material-tailwind/react";

const Features = () => {
    return (
        <div>
            <div className="container">
                <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
                    <div>
                        <Typography variant="h4">Empowering Your Learning Experience</Typography>
                        <Typography>{`Discover the key features that make our platform stand out. From "User-Friendly Collaboration" to "Resource Sharing," "Assignment Marking," and "Assignment Management," we've got your educational needs covered. Explore how each feature enhances your learning journey and fosters collaboration among students.`}</Typography>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;