import React, { Component } from "react";
import {Route} from "react-router-dom";

//layout
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC=({component:Component,...rest})=>{//component i destructure panna reason ada naan edit panna poradala //i'm adding rest of the properties
    return (
        <>
        <Route
        {...rest}
        //we want our component should editabale
        component={(props)=>(
        <DefaultLayout>
            <Component {...props}/>
        </DefaultLayout>

        )}
        />
        </>
    )
}
export default DefaultHOC;