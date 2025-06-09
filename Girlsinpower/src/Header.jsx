import React, {useState} from "react";
import { Menu, X } from "react-feather"
import "./Header.css"
function Header(){
     const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="main_header">
            <div className="header">
        <div className="logo">
            <h2 style={{
                color:'white',
                margin:'0'
            }}>GIP</h2>
        </div>

        <div className={`navlinks ${isOpen ? "open" : ""}`}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Initiatives</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div className="donate_now">
           <button>Donate Now</button>
        </div>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} color="white" /> : <Menu size={30} color="white" />}
        </div>
        </div>
    )
}
export default Header