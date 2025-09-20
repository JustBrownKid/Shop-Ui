import React from "react";
import Lottie from "react-lottie";
import Loading from '../../assets/Loader Animation.json';

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
    <div className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center">
  <Lottie options={defaultOptions} isClickToPauseDisabled={true} height="100px" width="100px" />
</div>
  
  );
};

export default NotFound;