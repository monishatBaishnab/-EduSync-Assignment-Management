import { Typography } from "@material-tailwind/react";
import solution_empty from '../../../assets/solution_empty.png'

const EmptySolutions = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="w-32 h-32 overflow-hidden">
                <img className="w-full h-full object-contain" src={solution_empty} alt='Solution' />
            </div>
            <Typography variant="h5" color="blue-gray" className="font-medium">No solutions yet. Start share your solution!</Typography>
        </div>
    );
};

export default EmptySolutions;