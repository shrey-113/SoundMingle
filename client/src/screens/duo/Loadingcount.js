import React, { useState, useEffect } from 'react';
// import tom from '../../assets/tom.png';
import jerry from '../../assets/jerry.png';
import logo from '../../assets/logo.png';
import { useStateProvider } from '../../utils/StateProvider';

function Loadingcount(props) {
  const [counter, setCounter] = useState(5);
  const [showMatching, setShowMatching] = useState(true);
  const [{ userInfo }] = useStateProvider();

  

  
  useEffect(() => {
    setTimeout(() => {
      setShowMatching(false);
    }, 2000);
  }, []);


  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCounter((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }, 1000);

    if (counter === 0) {
      clearInterval(countdownInterval);
    }

    return () => clearInterval(countdownInterval);
  }, [counter]);

  return (
      <div className="absolute bg-black z-10 w-full h-full flex flex-col justify-center items-center">
        <div className='flex justify-center items-center'>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
              <img src={userInfo?.image} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-white mt-2">{userInfo?.userName}</p>
          </div>
          <img src={logo} className='w-20 h-20 mx-4' alt="mainlogo"/>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-100" style={{ aspectRatio: '1/1' }}>
              <img src={props.othersprofileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-white mt-2">{props.othersusername}</p>
          </div>
        </div>
        
        <div className="mt-8">
          {showMatching ? (
            <h2 className="text-white text-2xl">Matching...</h2>
          ) : (
            <>
              <h2 className="text-white text-2xl">Song will play in</h2>
              <p className="text-white text-2xl">{counter}...</p>
            </>
          )}
        </div>
      </div>

  );
}

export default Loadingcount;
