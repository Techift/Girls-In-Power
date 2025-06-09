
import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Youtube } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_body">
        <div className="footer_logo" style={{
          color:'white',
          padding:'0'
        }}>
          <h2>GirlsInPower</h2>
          <p>© {new Date().getFullYear()} GirlsInPower. All rights reserved.</p>
          <p>
            Registered as a Non-Governmental <br /> Organization under the
            Corporate Affairs <br /> Commission (CAC), Nigeria.
          </p>
          <p>Contact girlsinpower.ngo@example.com</p>
        </div>

        <div className="footer_links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Get involved</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <footer
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          <h3>Follow Us on </h3>
          <div className="socials" style={{
            marginTop:'20px'
          }}>
          <Facebook/>
          <Twitter/>
         <Youtube/>
         <Instagram/>
         <Linkedin/>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
