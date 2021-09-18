import React from "react";

//import the components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousel from "../components/HeroCarousal/HeroCarousal.component";

//let's create functional component
const DefaultLayout=(props)=>{
    return (
        <>
        <Navbar />
        <HeroCarousel />
        {props.children}
        
        </>//child component aum rendor panna>>default.hoc.js la ikira==>> {props.children}==>>now ur child component also renderd
    )
}
export default DefaultLayout