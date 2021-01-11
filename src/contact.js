import React from "react";
import "./Contact.css"
import contact from "./contact.svg";


function Contact(){

    return(
        <div className = "Contact" id = "Contact">


        <h1 className = "TitleContact">Contact me</h1>


      <div className = "Join">
      
        <p>My Gmail: gabrielcote1999@gmail.com</p>

        <a href = "https://www.linkedin.com/in/gabriel-c%C3%B4t%C3%A9-207492202/">
        <p>My LinkedIn: https://www.linkedin.com/in/gabriel-c%C3%B4t%C3%A9-207492202/ </p>
        </a>

        <a href = "https://github.com/GabrielCote1999">
        <p>My GitHub: https://github.com/GabrielCote1999</p>
        </a>
        </div>
       
       <div className = "Image">

       <img src ={contact} alt = "Image" height = {300} width = {300}/>
       </div>
        </div>


);


}
export default Contact