import React from "react";
import "./App.css";
import Bar from "./Bar";
import "./Bar.css";
import Background from "./background";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import {HashLink as Link} from "react-router-hash-link"
import Contact from "./contact"







function App(){
  return (
    
    
    <div>
      
        <Background/>
  
      
        <Page3/>

       <Page4/>
       <Contact/>
     

     


   </div>
  
    
   
  ); 
} export default App;