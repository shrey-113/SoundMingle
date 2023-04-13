import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Duo from '../duo/index';
import Group from '../group/index';
import { useState, useEffect } from 'react';
import Loading from '../LoadingPage/Loading';
import LoginPage from '../Login/LoginPage';
import Homepage from './homepage';
import axios from 'axios'
import { useStateProvider } from '../../utils/StateProvider'
import { reducerCases } from '../../utils/Constants'



function Home() {

  const [load, setLoading] = useState(true);

  const [{ token }, dispatch] = useStateProvider('0ffdd015548d4b369d66245e731baf50');

  // console.log(token);

  useEffect(() => {
      const getUserInfo = async () => {
        const { data } = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        console.log({data})
        const userInfo = {
          userId: data.id,
          userName: data.display_name,
          image: data.images[0].url,
        };
        dispatch({ type: reducerCases.SET_USER, userInfo });
        // console.log(userInfo);
  
      };
      getUserInfo();
    }, [dispatch, token]);


  useEffect(() => {
    // Check if the animation has already been played
    const hasAnimationPlayed = localStorage.getItem('hasAnimationPlayed');
    if (hasAnimationPlayed) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
        // Persist that the animation has already been played
        localStorage.setItem('hasAnimationPlayed', true);
      }, 3000);
    }
  }, []);

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
          <Sidebar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/duo" element={<Duo />} />
            <Route path="/group" element={<Group />} />
          </Routes>
        </Router>
    </div>
  );
}

export default Home;
