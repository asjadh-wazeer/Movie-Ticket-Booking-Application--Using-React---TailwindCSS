import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertinmentcard.component";
import { Premier } from "../components/Premier/Premier.component";

//import temporary react component...for testing our files
const HomePage=()=> {
    return (
        <>
        <div className="container mx-auto  px-4">
        <h1 className="text-2xl font-bold text-gray-800">
            The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
        <Premier />
        </div>
        
        </>
    )
}

export default HomePage;