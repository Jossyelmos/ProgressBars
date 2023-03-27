import React, { useState } from 'react';
import CircularProgressBar from './CircularProgressBar';

const CircularBar = () => {
    const [percentage, setPercentage] = useState(35);
    
  return (
      <div className='container'>
          <div className="circle-cont">
            <CircularProgressBar percentage={percentage} circleWidth='200' />
            <input 
                type="range" 
                min='1' max='100' 
                step='1' value={percentage} 
                className='progressInput'
                onChange={(ev) => setPercentage(ev.target.value)} 
            />
          </div>
    </div>
  )
}

export default CircularBar;