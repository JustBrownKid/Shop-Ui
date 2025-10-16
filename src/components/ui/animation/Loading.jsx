import React from "react";
import Lottie from "react-lottie";
import Loading from '../../../assets/Loading Lottie animation.json';

const NotFound = () => {
  const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: Loading, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };

  return (
   <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/15 backdrop-blur-sm z-50">
  <Lottie 
    options={defaultOptions} 
    isClickToPauseDisabled={true} 
    height="90px" 
    width="90px" 
  />
</div>

  
  );
};

export default NotFound;