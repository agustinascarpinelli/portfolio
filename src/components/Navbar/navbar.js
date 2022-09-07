import React, { useContext } from 'react'
import Toggle from '../Toggle/toggle';
import './navbar.css'
import {Link} from 'react-scroll'
import { FormattedMessage } from 'react-intl';
import { themeContext } from '../../Context/themeContext';

const Navbar=()=>{
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode
   return(
    <div className='n-wrapper' id='Navbar'>
        <div className='n-left'>
            <div className='n-name' style={darkMode? {color:"white",  "text-shadow": "white 0.08em 0.08em 0.2em"}:{color:"#B100E8"}}>Agustina</div>
        
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li >
                        <Link style={darkMode? {color:"white"}:{color:"#B100E8"}} activeClass='active' to='Navbar' spy={true} smooth={true}>
                    <FormattedMessage
							id="nav.home"
							defaultMessage="Home"
						/>
                        </Link>
                    </li>
                    <li>
                        <Link style={darkMode? {color:"white"}:{color:"#B100E8"}} to='Knowledge' spy={true} smooth={true}>
                    <FormattedMessage
							id="nav.knowledge"
							defaultMessage="Knowledge"
						/>
                        </Link>
                    </li>
                    <li>
                        <Link style={darkMode? {color:"white"}:{color:"#B100E8"}} to='Curriculum' spy={true} smooth={true}>
                        <FormattedMessage
							id="nav.resume"
							defaultMessage="Resume"
						/>
                        </Link>
                    </li>
                    <li>
                        <Link style={darkMode? {color:"white"}:{color:"#B100E8"}} to='Portfolio' spy={true} smooth={true}>
                         Portfolio
                        </Link>
                    </li>
                </ul>
            </div>
            <Link style={darkMode? {color:"white"}:{color:"black"}} to='Contact' spy={true} smooth={true}>
            <button className='n-button button'><FormattedMessage
							id="nav.contact"
							defaultMessage="Contact me"
						/></button>
            </Link>
        </div>

    </div>
)
}

export default Navbar;