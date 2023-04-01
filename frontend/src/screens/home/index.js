import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import './home.css'
import Duo from '../duo/index'
import Group from '../group/index'
import { useState,useEffect } from 'react'
import Loading from "../LoadingPage/Loading"

function Home() {
    const [load, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  
    if (load) {
      return <Loading />;
    }
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
