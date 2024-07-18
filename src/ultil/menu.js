import icons from "./icons";

const {
  PiUsers,
  IoHomeOutline,
  IoChatboxOutline,
  IoHelpOutline,
  PiSignOutLight,
  IoInformationCircleOutline,
} = icons;

export const menuItems = [
  { icon: <IoHomeOutline />, title: "Dashboard" },
  { icon: <PiUsers />, title: "Customer" },
  { icon: <IoChatboxOutline />, title: "Message" },
  { icon: <IoInformationCircleOutline />, title: "Information" },
  { icon: <IoHelpOutline />, title: "Settings" },
  { icon: <PiSignOutLight />, title: "Sign Out" },
];
