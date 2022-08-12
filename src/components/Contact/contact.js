import React from "react";
import './contact.css'
const Contact =()=>{
return(
    <div className="contact" id="contact-form">
        <div className="contact-left">
            <h1>Contact me</h1>
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