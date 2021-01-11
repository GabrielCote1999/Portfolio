import React from "react";
import "./page2.css";
import twitterProjet from "./twitterProjet.svg";
import website from "./website.svg";
import investing from "./investing.svg"

function Page2(){
    return(
        <div className = "premier">
            <h1 className = "titre">Projets</h1>

            <div className = "page">

            <div className = "twitterProjectImage">
                <img className = "twitterBotImage"  src={twitterProjet} alt="twitterProjet" height ={250} width = {250} border-radius = {50} />
            </div>
                     <h1 className = "bot">Bot Twitter</h1>
                            <p className = "botText">   Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est
                            </p>

            

            <div className = "SiteWebImage">
                <img className = "SiteWebImageImage"  src={website} alt="website" height ={250} width = {250} border-radius = {50} />
            </div>
                     <h1 className = "TitreSite">Site Web</h1>
                            <p className = "SiteTexte">   Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est 
                            </p>

            <div className = "TroisiemeTitre">
                <img className = "troisiemeImage"  src={investing} alt="website" height ={250} width = {250} border-radius = {50} />
            </div>
                     <h1 className = "TitreTroisiemeTitre">Trading Bot</h1>
                            <p className = "tradingBotText">  Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il es Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est 
                            </p>
        </div>
        
        </div>
        

        

    );

}
export default Page2