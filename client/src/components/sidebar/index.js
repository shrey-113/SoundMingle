import React from "react";
import SidebarButton from "../sidebar/sidebarButton";
import "./sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { useStateProvider } from "../../utils/StateProvider";
import logout from "../../assets/shutdown.png"

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
        <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill />} />
        <SidebarButton title="Home" to="/home" icon={<AiFillHome />} />
        <SidebarButton title="Group" to="/group" icon={<IoIosPeople />} />
      </div>

      <div></div>
      <div>
        <button type="logout" className="w-12 hover:border-2 rounded-full">
          <img src={logout} alt="logouticon" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
