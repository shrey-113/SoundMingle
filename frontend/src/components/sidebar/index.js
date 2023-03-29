import React from 'react'
import { useLocation } from 'react-router'
import SidebarButton from '../sidebar/sidebarButton' 
import SignOutButton from './signOutButton'
import './sidebar.css'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { FaSignOutAlt } from 'react-icons/fa'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile pic" className="profile-pic" />

            <div className="sidebar-buttons">
                <SidebarButton title="Duo" to="/duo" icon={<BsFillPeopleFill/>}/>
                <SidebarButton title="Home" to="/" icon={<AiFillHome/>}/>
                <SidebarButton title="Group" to="/group" icon={<IoIosPeople/>}/>
            </div>  

            <div ></div>
        </div>


    )
}

export default Sidebar
