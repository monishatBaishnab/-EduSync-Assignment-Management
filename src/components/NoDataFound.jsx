import { Typography } from '@material-tailwind/react';
import notFound from '../assets/notFound.svg';

const NoDataFound = () => {
    return (
        <div className='flex items-center flex-col my-5'>
            <div>
                <img src={notFound} alt="" />
            </div>
            <Typography variant='h3'>No Data Found</Typography>
        </div>
    );
};

export default NoDataFound;