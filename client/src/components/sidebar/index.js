import React from "react";
import SidebarButton from "../sidebar/sidebarButton";
import "./sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { BsInfoCircleFill } from "react-icons/bs";
import { useStateProvider } from "../../utils/StateProvider";
import logout from "../../assets/shutdown.png"


function Sidebar() {

  const [{ userInfo }] = useStateProvider();

  const clicklogout=()=>{

    localStorage.clear();
    window.location.href='/'
  }

  return (
    <div className="sidebar-container">
      <div className="profile">
        <img src={userInfo?.image} alt="profile pic" className="profile-pic hover:border-2 rounded-full hover:border-white" />
        <h4 className="username">{userInfo?.userName}</h4>
 
      </div>

      <div className="sidebar-buttons">
        <SidebarButton title="Home" to="/home" icon={<AiFillHome />} />
        <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill />} />
        <SidebarButton title="Group" to="/group" icon={<IoIosPeople />} />
        <SidebarButton title="About" to="/about" icon={<BsInfoCircleFill />} />
      </div>

      <div></div>
      <div>
     
        <button type="logout" className="w-12 hover:border-2 rounded-full">
          <img onClick={clicklogout}src={logout} alt="logouticon" />
        </button>
   
      </div>
    </div>
  );
}

export default Sidebar;
