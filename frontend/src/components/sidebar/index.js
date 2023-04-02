import React from 'react'
import { useLocation } from 'react-router'
import SidebarButton from '../sidebar/sidebarButton' 
import SignOutButton from './signOutButton'
import './sidebar.css'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { FaSignOutAlt } from 'react-icons/fa'
import { useStateProvider } from '../../utils/StateProvider'



function Sidebar() {
    const [{ userInfo }] = useStateProvider();

    return (
        <div className="sidebar-container">
            <img src={userInfo?.image} style={{ width: "60px", height: "60px"}} alt="profile pic" className="profile-pic" />

            <div className="sidebar-buttons">
                <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill/>}/>
                <SidebarButton title="Home" to="/home" icon={<AiFillHome/>}/>
                <SidebarButton title="Group" to="/group" icon={<IoIosPeople/>}/>
            </div>  

            <div ></div>
        </div>


    )
}

export default Sidebar
