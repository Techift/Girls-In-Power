import { Send } from "react-feather";
import { PhoneCall } from "react-feather";
import { MapPin } from "react-feather";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <section className="contact" style={{}}>
      <div
        className="contactus"
        style={
          {
            // background:'linear-gradient(to bottom, green, rgb(241, 6, 84))',
            // marginTop:'3rem',
            // paddingLeft:'0'
          }
        }
      >
        <div className="contact_text">
          <h2 style={{ paddingTop: "5rem" }}>We'd love to hear from you!</h2>
          <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
            Whether you're looking to partner with us, join our programs or just
            say hello... Reach out
          </p>
        </div>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject " />
          <input type="text" placeholder="Phone Number (Optional)" required />
          <textarea placeholder="Your Message" required></textarea>
         
                 <Link to="/congrats" className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration:'none'}}>
          <button
            style={{
              display: "flex",
              alignitems: "center",
              gap: "10px",
              fontSize: "1.5rem",
            }}
            type="submit"
          >
           <Send /> Send Message{" "}
          </button>
          </Link>
        </form>
        <p style={{}}>
          {" "}
          <MapPin /> Email: contact@girlsinpower.org
        </p>
        <p>
          {" "}
          <PhoneCall /> Phone: +234 800 123 4567
        </p>
        <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <p style={{fontSize:'2rem',fontStyle:'italic',color:'rgb(12, 82, 14)',marginBottom:'2rem'}}>"Empowered girls become powerful women, let's build the future together"</p>
    </section>
  );
}
export default Contact;
