import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={
        {paddingTop:'4rem'}
      }
    >
      <div
        className="hero-overlay"
        style={
          {}
        }
      >
        <div className="hero_text">
          <h1>
            {" "}
            Empowering Girls <br /> And Women to Lead
          </h1>
          <p>
            Join us in creating opportunities for young girls to thrive and
            lead.
          </p>

          <p
            className="stats"
            style={{
              display: "flex",
              justifyContent:'start',
              alignItems:'center',
              gap: "3rem",
              marginTop: "2rem",
            }}
          >
            {" "}
            <div
              style={{
                color: "grey",
                fontStyle: "italic",
              }}
            >
              <h3 style={{ color: " rgb(241, 6, 84)", fontSize: "3rem" }}>
                5000+
              </h3>
              <p> girls educated</p>
            </div>
            <div
              style={{
                color: "grey",
                fontStyle: "italic",
              }}
            >
              <h3 style={{ color: " rgb(12, 82, 14)", fontSize: "3rem" }}>
                100+
              </h3>
              <p>scholarships awarded</p>
            </div>
          </p>

          <div className="cta-buttons" style={{}}>
            <Link
              to="#"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button
                className="donate"
                style={{
                  backgroundColor: " rgb(12, 82, 14)",
                  color: "white",
                  width: "250px",
                  padding: "1rem",
                  margin: "0",
                  borderRadius: "20px",
                  fontSize: "1.2rem",
                }}
              >
                Donate Now
              </button>
            </Link>

            <Link
              to="#"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <button
                className="join_now"
                style={{
                  backgroundColor: "transparent",
                  color: " rgb(241, 6, 84)",
                  width: "250px",
                  padding: "1rem",
                  fontSize: "1.2rem",
                  margin: "0",
                  border: "2px solid  rgb(241, 6, 84)",
                  borderRadius: "20px",
                }}
              >
                Join the Movement
              </button>
            </Link>
          </div>
        </div>

        <div className="hero_pic">
          <img
            src="/img/pic1.jpg"
            alt="girls"
            loading="lazy"
            style={{
              // maxWidth: "600px",
              width: "100%",
              height: "auto",
              maxWidth:'600px',
              maxHeight: "450px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
