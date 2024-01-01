import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
    const arr = [...Array(4).keys()];
    return (
        arr.map((id) => <div key={id} className="p-5 border bg-white md:flex md:items-center md:gap-5">
            <div className="w-full h-[180px] overflow-hidden rounded ">
                <Skeleton width='100%' height='100%' />
            </div>
            <div className="w-full">
                <div className="mb-3 mt-5 md:mt-0">
                    <Skeleton height='30px' width='100%' />
                </div>
                <Skeleton height='20px' width='100%' count='2' />
                <div className="flex gap-5 mt-5">
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                    <div className="basis-1/2"><Skeleton height='30px' width='100%' /></div>
                </div>
            </div>
        </div>)
    );
};

export default SkeletonLoader;