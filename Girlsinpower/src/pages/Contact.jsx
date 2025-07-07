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
          <p
            style={{
              paddingTop: "7rem",
              fontSize: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            Get in touch
          </p>
          <h2 style={{}}>Contact Us</h2>
        </div>
        <form>
          <input type="text" placeholder=" Gift Essang" required />
          <input type="email" placeholder=" you@gmail.com" required />
          {/* <input type="text" placeholder="Subject: laptop donation" /> */}
          {/* <input type="text" placeholder="Phone Number (Optional) +234 000222777" required /> */}
          <textarea placeholder="Your Message" required></textarea>

          <Link
            to="#"
            className={({ isActive }) => (isActive ? "active" : "")}
            style={{ textDecoration: "none" }}
          >
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
        <div className="contact" style={{ textAlign: "center" }}>
          <p style={{ marginBottom: "20px" }}>
            {" "}
            <MapPin /> 6067 10th street, Rio Linda CA 95673
          </p>
          <p style={{ marginBottom: "20px" }}>
            {" "}
            <PhoneCall /> (805) 559 - 4447
          </p>
        </div>
        {/* <div className="socials">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div> */}

        <p style={{ fontSize: "1.1rem", marginBottom: "20px" }}>
          girlsinpowerhq@gmail.com
        </p>
      </div>

      <p
        style={{
          fontSize: "2rem",
          fontStyle: "italic",
          color: "rgb(12, 82, 14)",
          marginBottom: "2rem",
        }}
      >
        "Empowered girls become powerful women, let's build the future together"
      </p>
    </section>
  );
}
export default Contact;
