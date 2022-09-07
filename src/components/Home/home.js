import React, { useContext } from "react";
import './home.css'


import {IntlProvider,FormattedMessage} from 'react-intl'
import { themeContext } from "../../Context/themeContext";
import {SiGithub,SiLinkedin,SiGmail} from "react-icons/si";

const Home =()=>{
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
    return(
       
        <div className="home ">
            <div className="h-left">
                <h1 className="h-h" style={darkMode? {color:"white"}:{color:"black"}}>
                    Agustina Scarpinelli</h1>
                <p className="h-p">Front-end developer</p>
                <p className="h-p-p"style={darkMode? {color:"white"}:{color:"black"}}>
                <FormattedMessage id="home.description" defaultMessage="I'm looking forward to develop myself in a company of programming and software development where i could contribute all the knowledge that I've been gained with my studies all these years and also to learn new ones."/>
                </p>
                <div className="h-icons" style={darkMode? {fill:"white !important"}:{fill:"black"}}>
                 <a href="https://github.com/agustinascarpinelli" target="_blank" ><SiGithub style={darkMode? {fill:"white", width:"4em", height:"4em"}:{fill:"black", width:"4em", height:"4em"} }/></a>   
                 <a href="https://linkedin.com/in/agustina-scarpinelli" target="_blank"> <SiLinkedin style={darkMode? {fill:"white", width:"4em", height:"4em"}:{fill:"black", width:"4em", height:"4em"}}/></a>   
                 <a href="mailto:agustina.scarpinelli@gmail.com" target="_blank"> <SiGmail style={darkMode? {fill:"white", width:"4em", height:"4em"}:{fill:"black", width:"4em", height:"4em"}}/></a>   
                </div>
            </div>
         
        </div>
        
    )
}

export default Home