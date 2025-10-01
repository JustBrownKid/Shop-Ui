import React, { useState } from "react";
import { Button } from "antd";
import Map from "../../Map/Map.jsx";

const LocationCard = ({ title, text, phone, position, PopupText }) => {
  const [show, setShow] = useState(false);

  const toggleMap = () => setShow(!show);

  return (
    <div className="group cursor-pointer my-4  md:mx-20 lg:mx-30 bg-white rounded shadow overflow-hidden">
      <div className="px-8 py-4 flex flex-col">
        <p className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </p>
        <p className="text-sm md:text-base  text-gray-700 line-clamp-3">
          {text}
        </p>

        <p className="text-sm md:text-base text-gray-700 line-clamp-1">
          Phone: {phone}
        </p>

        <div className="flex flex-wrap gap-2  justify-end">
          <Button type="primary">Call</Button>
          <Button onClick={toggleMap}>{show ? "Hide Map" : "Show Map"}</Button>
        </div>

        {show && (
          <div className="mt-4 w-full h-auto transition-all duration-500">
            <Map position={position} PopupText={PopupText} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationCard;
