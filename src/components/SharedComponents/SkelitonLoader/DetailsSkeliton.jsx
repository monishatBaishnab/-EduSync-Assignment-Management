import { Typography } from "@material-tailwind/react";

const DetailsSkeliton = () => {
    return (
        <div className="container grid gap-5 grid-cols-1 md:grid-cols-5">
            <div className="w-full h-full sm:h-[300px] overflow-hidden rounded bg-white p-5 col-span-2">
                <Typography as="div" className="h-full w-full mb-0 rounded bg-gray-300"> &nbsp; </Typography>
            </div>
            <div className="bg-white rounded p-5 space-y-4 col-span-3">
                <Typography as="div" className="w-full h-10 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                <div className="flex gap-5 items-center justify-between">
                    <Typography as="div" className="w-full h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                    <Typography as="div" className="w-full h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                </div>
                <Typography as="div" className="w-full h-32 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                <div className="flex gap-5 items-center justify-between">
                    <Typography as="div" className="w-full h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                    <Typography as="div" className="w-full h-6 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                </div>
                <div className="flex items-center gap-3 border-t pt-4">
                    <Typography as="div" className="h-10 w-32 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                    <Typography as="div" className="h-10 w-32 mb-0 rounded bg-gray-300"> &nbsp; </Typography>
                </div>
            </div>
        </div>
    );
};

export default DetailsSkeliton;