import React from "react";

function LabelText({ title, value }) {
    return (
        <p className=" text-[#9f9f9f] text-lg">
            <span className="text-black">{title}: </span>
            {value}
        </p>
    );
}

export default LabelText;