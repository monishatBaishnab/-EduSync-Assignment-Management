import { Typography } from "@material-tailwind/react";

const AssignmentsSkeliton = () => {
    const arr = [...Array(9).keys()];
    return (
        arr.map((id) => <div key={id} className="p-5 border bg-white rounded-md space-y-3">
            <div className="w-full h-[180px] overflow-hidden rounded">
                <Typography as="div" className="w-full h-[180px] rounded bg-gray-300"> &nbsp; </Typography>
            </div>
                <Typography as="div" className="w-full h-6 rounded bg-gray-300"> &nbsp; </Typography>
            <div className="flex justify-between gap-4">
                <Typography as="div" className="w-20 h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                <Typography as="div" className="w-20 h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
            </div>
        </div>)
    );
};

export default AssignmentsSkeliton;