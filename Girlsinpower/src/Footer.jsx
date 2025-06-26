
import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Youtube } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";

function Footer() {
  return (
    <>
    <div className="ovrfooter" style={{width:'100vw',backgroundColor:'rgb(12, 82, 14)'}}>
    <div className="footer">
      <div className="footer_body">
        <div className="footer_logo" style={{
          color:'white',
          padding:'0',
          margin:'0',
            // width:'100%',
            // maxWidth:'300px',
            alignItems:'center',
        }}>
          <img src="/img/girlslogo.png" alt="logo"  style={{width:'200px',height:'100px'}}/>
          <p>© {new Date().getFullYear()} GirlsInPower. All rights reserved.</p>
          <p>
            Registered as a Non-Governmental <br /> Organization under the
            Corporate Affairs <br /> Commission (CAC), Nigeria.
          </p>
          <p>Contact girlsinpower.ngo@example.com</p>
        </div>

        <div className="footer_links"
        style={{
            // width:'100%',
            // maxWidth:'200px'
          }}>
          <h3
          style={{
            marginTop:'20px',
            // fontSize:'2rem'
          }}>Quick Links</h3>
          <ul>
            <li>
              {" "}
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/initiatives">Get involved</a>
            </li>
            <li>
              <a href="/blogpage">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social"
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "0.9rem",
            // width:'100%',
            // maxWidth:'200px',
            // marginTop:'-100px',
          }}
        >
          <h3>Follow Us on </h3>
          <div className="socials" style={{
            marginTop:'20px',
          }}>
          <Facebook/>
          <Twitter/>
         <Youtube/>
         <Instagram/>
         <Linkedin/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}
export default Footer;
