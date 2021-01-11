import React from "react";
import "./page4.css"
import me from "./me.svg";


function Page4(){

    return(
        <div className = "page4" >

        <h1 className = "about" >About me</h1>
        <p className = "descriptionAbout">My name is Gabriel and I am a computer science student from the Université du Québec en Outaouais who 
aspire to become a software engineer. I usually use python for most of my projects, but for this website I used React. You can see the code for the website as well as my other projects on my github page. </p>


        <div className = "me">
        <img src ={me} alt = "me" height = {400} width = {400} id = "About"/>
      </div>


        </div>

);


}
export default Page4