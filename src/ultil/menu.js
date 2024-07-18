import icons from "./icons";

const {PiUsers,IoHomeOutline, IoChatboxOutline, IoHelpOutline, PiSignOutLight   } = icons

export const menuItems = [
    { icon: <IoHomeOutline />, title: 'Dashboard' },
    { icon: <PiUsers />, title: 'Customer' },
    { icon: <IoChatboxOutline />, title: 'Message' },
    { icon: <IoHelpOutline />, title: 'Settings' },
    { icon: <PiSignOutLight />, title: 'Sign Out' },
];

export const menuTab = [
    {
        id: 1,
        title: "Menu"
    },
    {
        id: 2,
        title: "Description"
    },
    {
        id: 3,
        title: "Comment"
    },
]