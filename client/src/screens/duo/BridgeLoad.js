import React, { useState, useEffect } from 'react';
import Loadingcount from './Loadingcount'
import DuoPlay from './DuoPlay'

function BridgeLoad() {
    const [showLoading, setShowLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setShowLoading(false);
      }, 6000);
    }, []);
  
    return (
      <div>
        {showLoading ? <Loadingcount /> : <DuoPlay />}
      </div>
    );
  }
  
  export default BridgeLoad;
 