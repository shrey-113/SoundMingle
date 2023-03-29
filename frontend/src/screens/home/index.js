import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import './home.css'
import Duo from '../duo/index'
import Group from '../group/index'

function Home() {
    return (
        <div className="main-body">
        <Router>
            <Sidebar/>
            <Routes>
                <Route path="/duo" element={<Duo/>} />
                <Route path="/group" element={<Group/>} />

            </Routes>
        </Router>
        </div>
    )
}

export default Home
