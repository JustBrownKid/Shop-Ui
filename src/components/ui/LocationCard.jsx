import React,{useState} from "react";
import { Button, Flex } from 'antd';
import Map from "../Map/Map.jsx";

const LocationCard = ({ title, text, phone, position, PopupText }) => {
  const [show, setShow] = useState(false)
  const Handler =() => {
    setShow(!show)
  }
  return (
    <div className="group cursor-pointer m-2 lg:mx-40 bg-white rounded shadow overflow-hidden">
      <div className="relative overflow-hidden">
      </div>

      <div className=" p-5 flex flex-col">
        <p className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </p>
        <p className="text-sm font m-1 text-gray-900 line-clamp-3">
          {text}
        </p>
         <p className="text-sm font text-gray-900 line-clamp-1">
          Phone : {phone}
        </p>
        <div className="flex flex-row justify-end gap-2">
          <Button>Call</Button>
          <Button onClick={Handler}>{show ? "Hide Map" : "Show Map"}</Button>
        </div>
        <div className="duration-5000 transform">
        {show ?
          <Map  position={position} PopupText={PopupText} />: null
          }
          </div>
      </div>
    </div>
  );
};

export default LocationCard;
