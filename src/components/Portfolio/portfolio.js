import React, { useContext } from "react";
import { themeContext } from "../../Context/themeContext";
import './portfolio.css'

const Portfolio = ()=>{
        const theme=useContext(themeContext)
        const darkMode=theme.state.darkMode
    return(
        <div className="portfolio shadow">
            <h1>Portolio</h1>
        </div>
    )
}

export default Portfolio