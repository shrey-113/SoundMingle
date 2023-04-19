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
      <a target="_blank" href={userInfo?.profileLink}>
      <img src={userInfo?.image} alt="profile pic" className="profile-pic hover:border-2 rounded-full hover:border-white" />
    </a>
        <h4 className="username">{userInfo?.userName}</h4>
 
      </div>

      <div className="sidebar-buttons">
        <SidebarButton title="Home" to="/home" icon={<AiFillHome color='white'/>} />
        <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill color='white'/>} />
        <SidebarButton title="Group" to="/group" icon={<IoIosPeople color='white'/>} />
        <SidebarButton title="About" to="/about" icon={<BsInfoCircleFill color='white'/>} />
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
