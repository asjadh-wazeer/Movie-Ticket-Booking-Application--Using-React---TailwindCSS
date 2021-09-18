import React from "react";

//custamize component
export const NextArrow = (props) => {
    //const {className,style,onClick} = props;
    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor:"black"}}//inline css. this is the way for ustomizw
        onClick={props.onClick}
        />
        </>
    )
}
export const PrevArrow = (props) => {
    return (
        <>
        <div 
        className={props.className}
        style={{ ...props.style, backgroundColor:"black"}}
        onClick={props.onClick}
        />
        </>
    )
}