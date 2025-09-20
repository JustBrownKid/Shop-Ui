import React from "react";
import Lottie from "react-lottie";
import NotFoundAnimation from '../../assets/Page Not Found 404.json';

const NotFound = () => {
  const defaultOptions = {
    loop: true, 
    autoplay: true, 
    animationData: NotFoundAnimation, 
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice' 
    }
  };

  return (
    <div className="flex items-center justify-center fixed inset-0">
      {/* Mobile-first approach: default size is smaller for mobile */}
      <div>
    <Lottie
        options={defaultOptions}
        isClickToPauseDisabled={true}
       
      />
      </div>
      
    </div>
  );
};

export default NotFound;