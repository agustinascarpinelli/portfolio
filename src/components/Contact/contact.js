import React from "react";
import './contact.css'
import { IconName } from "react-icons/io"
import { FiMail ,FiPhone} from "react-icons/fi";
const Contact =()=>{
return(
    <div className="contact shadow" id="Contact">
        <div className="contact-left">
            <h1>Contact me</h1>
            <a className="contact-a"href="mailto:agustina.scarpinelli@gmail.com" target="_blank"><FiMail/><p>agustina.scarpinelli@gmail.com</p></a>
            <p><FiPhone/> 1150413703</p>
        </div>
        <div className="contact-right">
            <form className="contact-form" >
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="email" name="user_email" className="user-email" placeholder="Email"/>
                <textarea name="user_email" className="user-email" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
            </form>
        </div>
    </div>
)
}

export default Contact