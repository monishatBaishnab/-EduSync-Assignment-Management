import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const { user, signOutUser } = useAuth();
    const handleSignOut = async () => {
        await signOutUser();
        closeMenu();
    }
    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button variant="text" color="blue-gray" className="p-0 rounded-full">
                    <Avatar variant="circular" size="sm" alt="tania andrew" className="border border-gray-900 p-0.5" src={user?.photoURL} />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                <MenuItem onClick={closeMenu} className={`flex items-center gap-2 rounded justify-center`} >
                    <Typography as="span" variant="small" className="font-normal flex items-center justify-center gap-2">
                        <FaRegUserCircle className="text-lg" /> {user.displayName}
                    </Typography>
                </MenuItem>

                <MenuItem onClick={handleSignOut} className={`flex items-center gap-2 justify-center rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10`} >
                    <Typography color="red" as="span" variant="small" className="font-normal flex items-center justify-center gap-2">
                        <FaPowerOff className="text-lg" /> Sign out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default ProfileMenu;