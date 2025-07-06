import { Facebook } from "react-feather";
import { Twitter } from "react-feather";
import { Youtube } from "react-feather";
import { Instagram } from "react-feather";
import { Linkedin } from "react-feather";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div
        className="ovrfooter"
        style={{ width: "100vw", backgroundColor: "rgb(12, 82, 14)" }}
      >
        <div className="footer">
          <div className="footer_body">
            <div
              className="footer_logo"
              style={{
                color: "white",
                padding: "0",
                margin: "0",
                alignItems: "center",
              }}
            >
              <img
                src="/img/girlslogo.png"
                alt="logo"
                style={{ width: "200px", height: "100px" }}
              />
              <p>
                Registered as a Non-Governmental <br/> Organization under the
                Corporate Affairs <br /> Commission (CAC), Nigeria.
              </p>
              <p>Contact girlsinpower.ngo@example.com</p>

            </div>

            <div className="footer_links" style={{ color: "white" }}>
              <h3
                style={{
                  marginTop: "20px",
                }}
              >
                Quick Links
              </h3>
              <ul style={{ color: "white" }}>
                <Link
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>About</li>
                </Link>

                <Link
                  to="/initiatives"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Get involved</li>
                </Link>
                <Link
                  to="/blogpage"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>NewsLetter</li>
                </Link>
                <Link
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <li>Contact</li>
                </Link>
              </ul>
            </div>

            <div
              className="social"
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "0.9rem",
                marginTop:'20px'
              }}
            >
              <h3>Follow Us on </h3>
              <div
                className="socials"
                style={{
                  marginTop: "20px",

                }}
              >
                <Facebook />
                <Twitter />
                <Youtube />
                <Instagram />
                <Linkedin />
              </div>
            </div>
          </div>
        </div>
          <div className="copyright" style={{textAlign:"center",color:'white',padding:'20px 0'}}>
              <p>
                © {new Date().getFullYear()} GirlsInPower. All rights reserved.
              </p>
            </div>
      </div>
    </>
  );
}
export default Footer;
