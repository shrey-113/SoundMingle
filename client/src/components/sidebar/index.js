import React from "react";
import SidebarButton from "../sidebar/sidebarButton";
import "./sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { useStateProvider } from "../../utils/StateProvider";
import logout from "../../assets/shutdown.png"
import { Link } from 'react-router-dom'

function Sidebar() {

  const [{ userInfo }] = useStateProvider();

  return (
    <div className="sidebar-container">
      <div className="profile">
        <img src={userInfo?.image} alt="profile pic" className="profile-pic" />
        <h4 className="username">{userInfo?.userName}</h4>
        {/* <button
         
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          Log out
        </button> */}
      </div>

      <div className="sidebar-buttons">
        <SidebarButton title="Home" to="/home" icon={<AiFillHome />} />
        <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill />} />
        <SidebarButton title="Group" to="/group" icon={<IoIosPeople />} />
        <SidebarButton title="About" to="/about" icon={<BsInfoCircleFill />} />
      </div>

      <div></div>
      <div>
        <Link to="/">
        <button type="logout" className="w-12 hover:border-2 rounded-full">
          <img src={logout} alt="logouticon" />
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
