import { Button, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types'

const AssignmentCard = ({assignment}) => {
    const {_id, title, thumbnail, mark, level} = assignment || {};
    return (
        <div className="p-5 border bg-white md:flex md:items-center md:gap-5">
            <div className="w-full h-[180px] overflow-hidden rounded md:w-[250px]">
                <img src={thumbnail} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-4 mt-3">
                <Typography variant="h6">{title}</Typography>
                <div className="flex flex-col">
                    <span>Mark: <span className="bg-light-orange/50 px-2 rounded">{mark}</span></span>
                    <span>Lacel: <span className="bg-light-orange/50 px-2 rounded">{level}</span></span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <Button onClick={() => {console.log(_id)}} className="w-full shadow-none hover:shadow-none bg-light-orange">View</Button>
                    <Button className="w-full shadow-none hover:shadow-none" variant="text">Update</Button>
                </div>
            </div>
        </div>
    );
};

AssignmentCard.propTypes = {
    assignment: PropTypes.object,
}

export default AssignmentCard;