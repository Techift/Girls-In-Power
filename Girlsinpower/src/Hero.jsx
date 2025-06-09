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
            <button
              className="donate"
              style={{
                backgroundColor: " rgb(241, 6, 84)",
                width: "200px",
                padding:'1rem',
                margin: "0",
                borderRadius:'20px',
                fontSize:'1.2rem',
              }}
            >
              Donate Now
            </button>
            <button
              className="join_now"
              style={{
                backgroundColor: "transparent",
                color: " rgb(241, 6, 84)",
                width: "250px",
                padding:'1rem',
                fontSize:'1.2rem',
                margin: "0",
              }}
            >
              Join the Movement
            </button>
          </div>
        </div>
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
    </section>
  );
}
export default Hero;
