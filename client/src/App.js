import React, { useEffect } from "react";
import Home from "./screens/home/index";
import "./index.css";
import LoginPage from "./screens/Login/LoginPage";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./utils/Spotify";



export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      window.location.replace(`${Spotify.redirectUrl}home`);
      const newToken = hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem("token", newToken);

      dispatch({ type: reducerCases.SET_TOKEN, token: newToken });
    } else {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        dispatch({ type: reducerCases.SET_TOKEN, token: storedToken });
      }
    }
  }, [dispatch]);

  return (<>
  <div>{token ? <Home /> : <LoginPage />}</div>

</>)
}
