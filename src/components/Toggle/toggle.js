import React, {useContext}from "react";
import './toggle.css'

import { langContext } from '../../Context/langContext';
import { themeContext } from "../../Context/themeContext";
import { FiMoon } from "react-icons/fi";

import {GrSun} from "react-icons/gr";
const Toggle =()=>{
const lang=useContext(langContext)
const theme=useContext(themeContext)
const darkMode =theme.state.darkMode

const handleClick=()=>
theme.dispatch({type:"toggle"})
return(
  <>
  <div className="toggleTheme">
    <button onClick={handleClick}><FiMoon style={{width:"1.2rem",height:"1.5rem"}}/></button>
    <button onClick={handleClick}><GrSun style={{width:"1.2rem",height:"1.5rem"}}/></button>
    <div className="tape"  style={darkMode? {left:"0px" } :{right:"0px"}}>
    </div>
  </div>
  
    <div className="toggleLang"  >
    <button onClick={()=>lang.setLang('en-US')}><p className="pToggle">EN</p></button> 
    <button  onClick={()=>lang.setLang('es-ES')}><p className="pToggle">ES</p></button> 
    <div className="tape"  style={lang.locale==='en-US' ? {left:"0px"} :{right:"0px"}}>
    </div>
    </div>
    </>
)

}

export default Toggle