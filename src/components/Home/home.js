import React from "react";
import './home.css'
import vector from '../../images/vector.png'
import logo1 from '../../images/github.png'
import logo2 from '../../images/linkedin.png'
import logo3 from '../../images/gmail.png'

const Home =()=>{
    return(
        <div className="home">
            <div className="h-left">
                <h1 className="h-h">Agustina Scarpinelli</h1>
                <p className="h-p">Front-end developer</p>
                <div className="h-icons">
                 <a href="https://github.com/agustinascarpinelli" target="_blank" > <img src={logo1} className="gitlogo" alt="logo"></img></a>   
                 <a href="https://linkedin.com/in/agustina-scarpinelli" target="_blank"> <img src={logo2} alt="logo"></img></a>   
                 <a href="mailto:agustina.scarpinelli@gmail.com" target="_blank"> <img src={logo3}  alt="logo"></img></a>   
                </div>
            </div>
            <div className="h-right">
              <img className="h-img"src= {vector} alt="vector"></img>
             
            </div>
        </div>
    )
}

export default Home