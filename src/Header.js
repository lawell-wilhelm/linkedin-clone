import "./Header.css";
import HeaderOption from "./HeaderOption";

import logo from "./linkedin-icon.svg";
import avatar from "./avatar.jpg";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="Linkedin logo" />
        <div className="header__search">
          <SearchIcon />
          <input type="search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={avatar} title="Wilhelm" />
      </div>
    </div>
  );
};

export default Header;
