import { Button, Typography } from "@material-tailwind/react";

const AssignmentsContainer = () => {
    const assignment = {
        "title": "Web Development Project",
        "description": "Create a dynamic website using HTML, CSS, and JavaScript. Focus on user interactivity, responsive design, and functionality. Implement features like user registration, a product catalog, and a contact form.",
        "marks": 15,
        "thumbnailImageURL": "https://i.ibb.co/Pcb96Wh/domenico-loia-h-GV2-Tf-Oh0ns-unsplash.jpg",
        "label": "hard",
        "dueDate": "2024-04-01",
        "user": {
            "email": "baishnabmonishat@gmail.com"
        }
    };

    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="p-5 border bg-white md:flex md:items-center md:gap-5">
                        <div className="w-full h-[180px] overflow-hidden rounded md:w-[250px]">
                            <img src={assignment.thumbnailImageURL} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-4 mt-3">
                            <Typography variant="h6">{assignment.title}</Typography>
                            <div className="flex flex-col">
                                <span>Mark: <span className="bg-light-orange/50 px-2 rounded">{assignment.marks}</span></span>
                                <span>Label: <span className="bg-light-orange/50 px-2 rounded">{assignment.label}</span></span>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <Button className="w-full shadow-none hover:shadow-none bg-light-orange">View</Button>
                                <Button className="w-full shadow-none hover:shadow-none" variant="text">Update</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsContainer;