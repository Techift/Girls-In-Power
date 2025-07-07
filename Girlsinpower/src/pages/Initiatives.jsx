import { Link } from "react-router-dom";

function Initiatives() {
  return (
    <section className="involved">
      <div className="initiatives">
        {" "}
        <h1
          style={{
            color: "rgb(241, 6, 84)",
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "bold",
            padding: "8rem 0",
          }}
        >
          Get Involved
        </h1>
        <div className="ini_text" style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "3rem",
              color: "rgb(12, 82, 14)",
              fontFamily: "sans-serif",
              fontWeight: "700",
              marginBottom: "2rem",
            }}
          >
            Empowering Girls. One initiatives at a time.
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              color: "grey",
              fontFamily: "sans-serif",
              fontWeight: "500",
              marginBottom: "2rem",
            }}
          >
            At{" "}
            <span style={{ color: "rgb(241, 6, 84)" }}>
              {" "}
              <strong>Girls In Power,</strong>{" "}
            </span>
            we believe that every girl deserves the tools, resources, and
            opportunities to lead, create, and thrive. <br />
            Our initiatives are designed to break barriers, build confidence,
            and drive change from the ground up
          </p>
        </div>
          <div className="cards">
            <div className="card1">
              <h3>Tech Bootcamps</h3>
              <p>Teaching girls coding, design, and digital literacy. Workshops in web development, UI/UX, and app creation. </p>
            </div>
            
            <div className="card2">
              <h3>VoiceHer Campaign</h3>
              <p>Amplifyng girls 'voices' in communities and online.</p>
            </div>

            <div className="card3">
              <h3> Talent Showcase</h3>
              <p>
                Giving girls a stage to shine through music, art, and
                performances.
              </p>
            </div>
            
            <div className="card4">
              <h3>Community action Projects</h3>
              <p>
                Connecting young girls with female role models and having One-on-One mentoring sessions and monthly Q&A's.
              </p>
            </div>
          </div>

          <p style={{textAlign:'center',fontSize:'1.1rem'}}>Join us in building a future where girls lead with confidence and purpose. <br /> 
          Whether you're a mentor, donor, or volunteer..... There's a place for you.
          </p>

            <div className="cta_btns" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',width:'100%',margin:'0',maxWidth:'1400px'}}>

              <Link to="#" className={({isActive}) => isActive ? 'active' : ''} style={{ textDecoration:'none'}}>
          <button
            className="donate"
            style={{
              backgroundColor: "rgb(241, 6, 84)",
              color: "white",
              padding: "1rem 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              margin: "1rem 0",
              height:'auto'
            }}
          >
            Donate Now
          </button>
          </Link>

            <Link to="#" className={({isActive}) => isActive ? 'active' : ''} style={{ textDecoration:'none'}}>
          <button
            className="join"
            style={{
              backgroundColor: "rgb(241, 6, 84)",
              color: "white",
              padding: "1rem 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              margin: "1rem 0",
            }}
          >
            Become a Volunteer
          </button>
          </Link>

            <Link to="#" className={({isActive}) => isActive ? 'active' : ''} style={{ textDecoration:'none'}}>
          <button
            className="partner"
            style={{
              backgroundColor: "rgb(241, 6, 84)",
              color: "white",
              padding: "1rem 20px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              margin: "1rem 0",
            }}
          >
            Corporate Partnership
          </button>
          </Link>
          </div>
      
      </div>
    </section>
  );
}
export default Initiatives;
