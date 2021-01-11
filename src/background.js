import React from "react";
import "./Bar.css";
import * as ReactBootstrap from "react-bootstrap"
import github from './github.png';
import twitter from './twitter.png';
import youtube from "./youtube.png";
import work from "./work.svg";
import {Link} from 'react-scroll';

function Background(){
    return(
       
      <div className = "background">
        
<div id = "Home">
<div>
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" className = "colorNav" variant="light" fixed = "top"> 


  <ReactBootstrap.Navbar.Brand href="#home">
  <Link activeClass="active" to="Home" spy={true} smooth={true} duration={700} className = "id" >
      Gabriel Côté
        </Link></ReactBootstrap.Navbar.Brand>


  <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootstrap.Navbar.Collapse  id="responsive-navbar-nav">


    <ReactBootstrap.Nav className="border-left pl-2" >
      
    <ReactBootstrap.Navbar.Brand href="#home"> 

    <Link activeClass="active" to="Project" spy={true} smooth={true} duration={700} >
      Project  
        </Link>

        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Brand href="#home"> 

        <Link activeClass="active" to="About" spy={true} smooth={true} duration={700} >
      About
        </Link>

        </ReactBootstrap.Navbar.Brand>

        <ReactBootstrap.Navbar.Brand href="#home"> <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={700} >
      Contact  
        </Link>
        </ReactBootstrap.Navbar.Brand>
      
        
      
       
        

       
       
      
        
        
         
        

       
      
    </ReactBootstrap.Nav>
    
    
  </ReactBootstrap.Navbar.Collapse>
</ReactBootstrap.Navbar>

 
    
    </div  >

    
      <h1 className = 'Hi' >Welcome to<br>
      </br> my website !</h1>
      <p className = 'description'>
    
       Welcome to my website! This is where you can find anything<br></br> 
       about me. The projects that i've been working on, my socials<br></br> 
       and the ways to contact me. <br></br> -Gabriel</p>

       <p className = 'description2'>
       Welcome to my website! This is where you can find anything 
       about me. The projects that i've been working on, my socials
       and the ways to contact me. <br></br> -Gabriel</p>
       
      
    

   
   
       <Link activeClass="active" to="Project" spy={true} smooth={true} duration={700} >
    <button className = "firstButton">

 
      
        
     Start
     
    </button>
    </Link>

    <Link activeClass="active" to="About" spy={true} smooth={true} duration={700} >
    <button className = "secondButton">
   
     
        
    About
    </button>
    </Link>
   
    

      <div className = "img1">

      
      
      <a href = "https://github.com/GabrielCoteYoutube/twitter-bot-working">
        
      <img className = "github" src={github} alt="githubLogo" height ={73} width = {73}/>
      </a>
      </div>
      <div className = "img2" >

      <a href = "https://twitter.com/Gabriel57439222">
      <img className = "twitter" src={twitter} alt="twitterLogo" height ={65} width = {65}/>
      </a>
      </div>

      
      <div className = "img3" >
        
      <a href = "https://www.youtube.com/channel/UCY6aMSkxzRyhHbLfp6TJbwg">
      <img className = "youtube"  src={youtube} alt="twitterLogo" height ={100} width = {100}/>
      </a>
      </div>
      <div className = "work">
        <img src ={work} alt = "work" height = {700} width = {700}/>
      </div>

   
   
  
      </div>


      </div>
      
          
    

    );
}
export default Background;