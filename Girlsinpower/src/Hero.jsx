import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
      }}
    >
      <div
        className="hero-overlay"
      >
        <div className="hero_text">
          <h1>
            {" "}
            <span>Empowering</span> Girls <br /> And <span>Women</span> to Lead
          </h1>
          <p>
            Join us in creating opportunities for young girls to thrive and
            lead.
          </p>
          <div
            className="cta-buttons"
            style={
              {
              }
            }
          >
            <Link to="/donatepage" className={({isActive}) => isActive ? 'active' : ''}>
            <button
              className="donate"
              style={{
                backgroundColor: " rgb(12, 82, 14)",
                color: "white",
                width: "200px",
                padding:'1rem',
                margin: "0",
                borderRadius:'20px',
                fontSize:'1.2rem',
              }}
            >
              Donate Now
            </button>
            </Link>

            <Link to="/initiatives" className={({isActive}) => isActive ? 'active' : ''}>
            <button
              className="join_now"
              style={{
                backgroundColor: "transparent",
                color: " rgb(12, 82, 14)",
                width: "250px",
                padding:'1rem',
                fontSize:'1.2rem',
                margin: "0",
                border: "2px solid rgb(12, 82, 14)",
                borderRadius:'20px',
              }}
            >
              Join the Movement
            </button>
            </Link>
          </div>
        </div>

        <div className="">
        <img
          src="/img/heropic.png"
          alt="girls"
          style={{
            maxWidth: "500px",
            height: "auto",
            borderRadius: "30px",
          }}
        />
        </div>
      </div>
    </section>
  );
}
export default Hero;
