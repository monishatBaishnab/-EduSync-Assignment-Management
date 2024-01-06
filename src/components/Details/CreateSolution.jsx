import { Button, Dialog, DialogBody, DialogHeader, Input, Textarea, Typography } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const CreateSolution = ({ handleOpen, open }) => {
    const [links, setLinks] = useState([]);
    const linkRef = useRef('');

    const handleAddLink = () => {
        const link = linkRef.current.value;
        if(links?.length >= 2){
            toast.error('You can add only two link.');
            linkRef.current.value = '';
            return;
        }
        if(link !== ''){
            setLinks([...links, link]);
            linkRef.current.value = '';
            toast.success('Link Added.');
        }else{
            toast.error('Please enter a valid link.');
        }
    }
    
    const handleResponse = async () => {
        console.log('responsed');
    }
    return (
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader className="justify-between border-b sm:px-10">
                <Typography variant="h5" className="font-medium text-light-orange">Create Assignment Solution</Typography>
                <IoClose className="text-blue-gray-700 cursor-pointer" onClick={handleOpen} />
            </DialogHeader>
            <DialogBody className="sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {links?.map((link, id) => <Typography as='span' className="px-4 py-2 border flex items-center gap-2 rounded-sm" key={id}> <FaLink className="text-light-orange" />{link?.length > 25 ? link?.slice(0,25)+'...' : link}</Typography>)}
                </div>
                <form onSubmit={handleResponse}>
                    <div className="space-y-5">
                        <div>
                            <Typography as='label' htmlFor='link' color="blue-gray" className="mb-2">Links</Typography>
                            <div className="flex relative">
                                <Input inputRef={linkRef} defaultValue={linkRef?.current?.value ? linkRef?.current?.value : ''} required name="link" placeholder="Solution Reference Links" id="link" className=" !border-t-blue-gray-200 rounded-sm focus:!border-light-orange focus:border" labelProps={{ className: "before:content-none after:content-none", }} />
                                <Button onClick={handleAddLink} size="sm" className="!absolute right-1 top-1 rounded-sm bg-light-orange shadow-none hover:shadow-none"> Add </Button>
                            </div>
                        </div>
                        <div>
                            <Typography as='label' htmlFor='explanation' color="blue-gray" className="mb-2">Explanation</Typography>
                            <Textarea required name="explanation" placeholder="Solution explanation" id="explanation" className=" !border-t-blue-gray-200 rounded-sm focus:!border-light-orange focus:border" labelProps={{ className: "before:content-none after:content-none", }} />
                        </div>
                        <Button type="submit" className="bg-light-orange shadow-none hover:shadow-none">Submit Solution</Button>
                    </div>
                </form>
            </DialogBody>
        </Dialog>
    );
};

CreateSolution.propTypes = {
    handleOpen: PropTypes.func,
    open: PropTypes.bool,
}

export default CreateSolution;