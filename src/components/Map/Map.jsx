import React from 'react';

function Map({position, PopupText}) {
  const [lat, lng] = position || [34.0522, -118.2437]; // Default to Los Angeles if position is undefined
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=en&z=17&t=m&output=embed`;

  return (
    <div 
      className="w-full h-96 md:h-[500px] duration-500 overflow-hidden rounded-xl shadow-2xl border border-gray-200" 
      style={{ marginTop: "20px" }} 
    >
      <iframe
        title="Location Map"
        src={embedUrl}
        width="100%" 
        height="100%" 
        style={{ 
          border: 0, 
          zIndex: 100, 
        }}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      >
        <p className="text-center p-4 text-gray-600 bg-gray-50 h-full flex items-center justify-center">
          {PopupText || "Location Map"}
        </p>
      </iframe>
    </div>
  );
}
 
export default Map;
