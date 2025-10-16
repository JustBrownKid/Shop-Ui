import React, { useState } from 'react';

const HiringItem = ({ label, sections = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white rounded-lg shadow-md my-2 mx-auto w-full">
      <button
        className="flex items-center justify-between w-full p-4 font-semibold text-left text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg transition duration-200 ease-in-out"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{label}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[2000px] py-4' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 text-gray-600">
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              {section.title && (
                <p className="text-lg ml-2 font-bold text-gray-900">{section.title}</p>
              )}
              {Array.isArray(section.content) ? (
                <ul className="list-disc ml-8">
                  {section.content.map((item, i) => (
                    <li key={i} className="text-sm my-1 text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm my-1 text-gray-700 ml-5">{JSON.stringify(section.content)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringItem;
