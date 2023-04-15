import React, { useState, useEffect } from 'react';
import Loadingcount from './Loadingcount'
import DuoPlay from './DuoPlay'

function BridgeLoad() {
  const [showLoading, setShowLoading] = useState(true);
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
    }, 6000);
  }, []);

  const handlePlayerChange = () => {
    setIsPlayerOne(!isPlayerOne);
  }

  return (
    <div>
      {showLoading ? <Loadingcount /> : <DuoPlay isPlayerOne={isPlayerOne} onPlayerChange={handlePlayerChange} />}
    </div>
  );
}

export default BridgeLoad;
