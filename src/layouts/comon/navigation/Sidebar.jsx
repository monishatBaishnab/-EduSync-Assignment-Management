import { Button, Drawer, List, ListItem } from "@material-tailwind/react";
import PropTypes from 'prop-types';
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
    const closeDrawer = () => setOpen(false);
    return (
        <Drawer className="p-5" open={open} onClose={closeDrawer} overlayProps={{ className: 'fixed' }}>
            <div className="flex flex-col justify-between h-full">
                <List>
                    <ListItem className="p-0"><NavLink className={({ isActive }) => isActive ? "text-light-orange bg-blue-gray-50 w-full py-3 px-4 rounded-lg" : "px-4 w-full py-3"} to='/'>Home</NavLink></ListItem>
                    <ListItem className="p-0"><NavLink className={({ isActive }) => isActive ? "text-light-orange bg-blue-gray-50 w-full py-3 px-4 rounded-lg" : "px-4 w-full py-3"} to='/assignments'>Assignment</NavLink></ListItem>
                    <ListItem className="p-0"><NavLink className={({ isActive }) => isActive ? "text-light-orange bg-blue-gray-50 w-full py-3 px-4 rounded-lg" : "px-4 w-full py-3"} to='/myAssignment'>My Assignment</NavLink></ListItem>
                    <ListItem className="p-0"><NavLink className={({ isActive }) => isActive ? "text-light-orange bg-blue-gray-50 w-full py-3 px-4 rounded-lg" : "px-4 w-full py-3"} to='/submited'>Submited Assignment</NavLink></ListItem>
                </List>
                <div className="flex items-center justify-between gap-2 md:hidden">
                    <Link to='/signin' className="w-full">
                        <Button className="w-full shadow-none hover:shadow-none hover:bg-transparent rounded-full py-2 active:bg-transparent" variant="text">Sign in</Button>
                    </Link>
                    <Link to='/signup' className="w-full">
                        <Button className="w-full shadow-none hover:shadow-none rounded-full py-2">Sign up</Button>
                    </Link>
                </div>
            </div>
        </Drawer>
    );
};

Sidebar.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default Sidebar;