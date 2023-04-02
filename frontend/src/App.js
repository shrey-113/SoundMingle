import React,{useEffect} from 'react'
import Home from './screens/home/index'
import "./index.css"
import LoginPage from './screens/Login/LoginPage'
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
// import Homepage from './screens/home/homepage';

export default function App() {


  const [{token},dispatch]=useStateProvider();

  useEffect(()=>{
    const hash=window.location.hash
    if(hash){
      const token=hash.substring(1).split("&")[0].split("=")[1]
      console.log(token) 
      dispatch({type:reducerCases.SET_TOKEN,token})
    }
    
  },[token,dispatch])

  return (
    <div>

      {
        token ? <Home/>: <LoginPage/>
      }

   

    </div>
  )
}
