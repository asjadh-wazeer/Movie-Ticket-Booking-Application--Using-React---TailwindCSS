import {Route} from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/Default.hoc"

//import temporary component
import HomePage from "./pages/Home.page"

// Import css files - to avoid paste this everywhere - bcz app.js is global
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <> 
      <DefaultHOC path="/" exact component={HomePage}/>
    </> //Temp is the child component //path is rouyte route //DefaultHOC :parent, Temp : child //default.hoc.js
  );
} 
//route create panna porom->  / , /movie
export default App;

//we have to render the route... why e have render it again here?
//bcz default.hoc is parent component of route....DefaultLayout,component everything(default.hoc.js)