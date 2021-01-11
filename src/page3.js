import React from "react";
import "./page3.css"
import github from './github.png';
import {HashLink as Link} from "react-router-hash-link"


function Page3(){

    return(

       
    <div className = "page3">


      

        <div>
            <h1 className = "MyProjects" >My projects </h1>
        </div>

        <div className = "titre" id = "Project">
           

            </div>
            

         <div className = 'projet2'>
             <h1 className = "titreProjet">Twitter Bot</h1>
             <p className = "textProjet2">

             This bot uses the NASA api to tweet an image of mars from the rover curiosity on Twitter every day </p>
             <a href = "https://github.com/GabrielCoteYoutube/twitter-bot-working">
             <img className = "github" src={github} alt="githubLogo" height ={73} width = {73}/>
             </a>
            </div>

        

            <div className = 'projet1'>
                <h1 className = "titreProjet">Website</h1>
                    <p className = "textProjet2">This website is my most recent project so far. I've done it using React.js</p>
                <img className = "github2" src={github} alt="githubLogo" height ={73} width = {73}/>
       </div>

       

            

       

        


        

     </div>
     

   

    );


}
export default Page3