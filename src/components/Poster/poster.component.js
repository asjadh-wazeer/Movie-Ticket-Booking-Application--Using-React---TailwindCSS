import React from "react";
const Poster =(props) => {
    return (
        <>
        <div >
            <div className="h-80">
                <img src={props.src} alt={props.title}/>
            </div>
            <h3
            className={`text-lg font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}
            >{props.title}</h3>
            <p
            className={`text-sm font-bold ${
                props.isDark ? "text-white" : "text-gray-700"
            }`}
            >{props.subtitle}</p>
        </div>
        </>
    )
};

export default Poster;