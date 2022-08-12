import React from 'react'
import './navbar.css'

const Navbar=()=>{
return (
    <div className='n-wrapper' id='Navbar'>
        <div className='n-left'>
            <div className='n-name'>Agustina</div>
            <span>Toggle darkmode</span>
            <span>Toggle idioma</span>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Conocimientos
                    </li>
                    <li>
                        Curriculum vitae
                    </li>
                    <li>
                        Portfolio
                    </li>
                </ul>
            </div>
            <button className='n-button button'>Contacto</button>
        </div>

    </div>
)
}

export default Navbar;