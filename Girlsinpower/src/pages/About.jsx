function About() {
  return (
    <>
      <section style={{ padding: "0" }}>
        <div className="about_us">
         
          <div
            className="about_hero"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100vw",
              maxWidth: "1400px",
              height: "100vh",
              backgroundImage: 'url("/img/pic6.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: 'relative',
            }}
          >
           <div style={{
            zIndex: '20',
            position: 'absolute',
            width: '99%',
              maxWidth: "1400px",
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.5)',
            left: '0'
          }}></div>
            <div style={{
              position: 'relative',
              zIndex: '30'
            }}>
              <h2
                className="about_h2 hero_text"
                style={{
                  margin: "0",
                  marginBottom: "2rem",
                  paddingTop: "5rem",
                  color: "white",
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "5rem",
                }}
              >
                <span style={{ color: "rgb(241, 6, 84)" }}>Empowering </span>
                the next <br /> Generation of{" "}
                <span style={{ color: "rgb(241, 6, 84)" }}>
                  Female <br /> Leaders
                </span>
              </h2>
              <p
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  textAlign: "center",
                  justifyContent: "center",
                  minWidth:"20rem",
                  maxWidth: "40rem",
                  
                }}
              >
                We're on a mission to bridge the gender gap in technology,
                entrepreneurship, and leadership by providing world-class
                education, mentorship, and opportunities.
              </p>
            </div>
          </div>

          <div className="text_ovr" style={{ padding: "0 2rem" }}>
            <h1
              style={{
                color: "rgb(241, 6, 84)",
                // fontSize: "3rem",
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              Empower Girls.
              <span style={{ color: "rgb(12, 82, 14)" }}>
                Inspiring Change.
              </span>
              Leading the Future.
            </h1>

            <div className="mission">
              <h3
                style={{
                  color: "rgb(241, 6, 84)",
                  fontSize: "2rem",
                  margin: "2rem 0",
                  textAlign: "center",
                }}
              >
                <span style={{ color: "rgb(12, 82,14)", }}>
                  {" "}
                  Our
                </span>{" "}
                Mission
              </h3>
              <p
                style={{
                  color: "black",
                  fontSize: "1.2rem",
                  marginBottom: "2rem",
                  textAlign:'center'
                }}
              >
                {/* To empower the next generation of female leaders through
                education, technology, creativity, and community engagement. */}
                To inspire mentor and equip girls and women with the skills and confidence to become transformational leaders.
              </p>
            </div>
            <h3
              style={{
                textAlign: "center",
                color: "rgb(12, 82, 14)",
                fontSize: "2rem",
                marginTop: "2rem",
              }}
            >
              {" "}
              <span
                style={{
                  color: "rgb(241, 6, 84)",
                  // fontSize: "3.5rem",
                  marginBottom: "2rem",
                }}
              >
                {" "}
                Our{" "}
              </span>{" "}
              Vision
            </h3>

            <p
              style={{
                color: "black",
                fontSize: "1.2rem",
                marginBottom: "2rem",
                textAlign:'center'
              }}
            >
              Empowering women and girls to take up leadership positions across Africa
              {/* Girls in Power was founded with a simple yet powerful vision: to
              create a world where women are equally represented in technology
              leadership roles. We believe that diversity drives innovation, and
              that the future of technology depends on including all voices.{" "}
              <br /> <br />
              Through intensive bootcamps, mentorship programs, and career
              development initiatives, we've helped thousands of women
              transition into tech careers, advance to leadership positions, and
              launch successful startups.{" "} */}
            </p>

            {/* <div className="card_vm" style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'2rem'}}> */}
            {/* <div className="vision" >
          <p style={{ color: "black" }}>
            A world where every girl is confident, bold, and equipped to lead in
            every space she enters
          </p>
        </div> */}

            
          </div>

          {/* <div className="activities">
          <h2 style={{ color: "rgb(12, 82, 14)" }}>What We Do</h2>
          </div> */}
        </div>
      </section>
    </>
  );
}
export default About;
