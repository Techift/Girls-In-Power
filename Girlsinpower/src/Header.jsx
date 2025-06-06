import "./Header.css"
function Header(){
    return(
        <div className="header">

        <div className="logo">
            <h2>GIP</h2>
        </div>

        <div className="navlinks">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Initiatives</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div className="donate">
           <button>Donate Now</button>
        </div>
            
        </div>
    )
}
export default Header