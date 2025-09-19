import React from 'react';
import { Collapse } from 'antd';
const HiringItem = ({label,sections }) => {
    return (
        <Collapse
            style={{margin:"8px 150px"}}
            items={[{   
                key: '1', label: <spam style={{fontSize: "18px"}}>{label}</spam>, children:
                    <div>
                       {sections.map((section, index) => (
                            <div key={index}>
                                <p className="text-lg ml-2 font-bold text-gray-900">
                                    {section.title}
                                </p>
                                {Array.isArray(section.content) ? (
                                    <ul>
                                        {section.content.map((item, i) => (
                                            <li key={i} className="text-sm m-1 ml-5 text-gray-900">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-sm m-1 ml-5 text-gray-900 line-clamp-3">
                                        {section.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
            }]}
        />
    );  
}
export default HiringItem;