import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import Duo from '../duo/index';
import Group from '../group/index';
import {  useEffect } from 'react';
import LoginPage from '../Login/LoginPage';
import Homepage from './homepage';
import axios from 'axios';
import { useStateProvider } from '../../utils/StateProvider'
import { reducerCases } from '../../utils/Constants';
import Groupplayer from '../group/Groupplayer';

import NotFoundPage from '../404/NotFoundPage';
import About from '../about'

function Home() {



  const [{ token }, dispatch] = useStateProvider();

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
      console.log(data.external_urls.spotify
        )
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        image: data.images[0].url,
        profileLink:data.external_urls.spotify

        
      };

      localStorage.setItem('userId', data.id);
      localStorage.setItem('profileImage', data.images[0].url);
      localStorage.setItem('userName', data.display_name);
      // console.log({data})
      dispatch({ type: reducerCases.SET_USER, userInfo });
      // console.log(userInfo);


    };
    getUserInfo();
  }, [dispatch, token]);

  return (
    <div className="main-body">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/duo" element={<Duo />} />
          <Route path="/group" element={<Group />} />
          <Route path="/about" element={<About />} />
          <Route path="/group/:groupId/room" element={<Groupplayer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
