import { Link } from "react-router-dom";

function Volunteer() {
  return (
    <>
      <div className="volunteer" style={{ paddingTop: "8rem" }}>
        <div
          className="volunteer_text"
          style={{ padding: "0 2rem", textAlign: "center" }}
        >
          <h2>Be the spark. Empower a girl!</h2>

          <p
            style={{
              fontSize: "1.3rem",
              textAlign: "center",
              maxWidth: "700px",
              margin: "auto",
            }}
          >
            At{" "}
            <span style={{ color: "rgb(12, 82, 14)", fontWeight: "600" }}>
              {" "}
              Girls in Power,
            </span>{" "}
            we believe every girl deserves the chance to rise, lead, and shine.
            As a volunteer, you’re not just giving your time — you're changing
            lives. Whether you mentor, teach, support, or create, your impact
            echoes far beyond today.
          </p>
        </div>
      </div>

      <div className="volunteer_list" style={{ textAlign: "center" }}>
        <h3
          style={{
            paddingTop: "4rem",
            color: "rgb(12, 82, 14)",
            fontSize: "2rem",
          }}
        >
          Why Volunteer?
        </h3>
        <ul style={{ listStyle: "none", fontSize: "1.2rem" }}>
          <li>Empower young girls to discover their strengths.</li>
          <li>Contribute to meaningful change in your community.</li>
          <li>Gain experience, purpose, and lifelong connections.</li>
          <li>Be part of a passionate, purpose-driven movement.</li>
        </ul>
      </div>

      <div
        className="volunteer_goals"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 4rem",
          marginTop: "3rem",
          flexWrap: "wrap",
        }}
      >
        <div className="volunteer_passion" style={{background:'rgb(241, 6, 84)',marginBottom:'2rem', padding:'1rem 2rem', borderRadius:'20px', color:'white',width:'400px',height:'200px'}}>
          <h3 style={{ textAlign: "center", color: 'white' }}>
            What we are looking for
          </h3>
          <ul style={{ listStyle: "none" }}>
            <li>1. Passionate individuals who believe in girl empowerment</li>
            <li>2. Willingness to contribute time, skills, and energy</li>
            <li>
              3. Commitment to our values: leadership, equality, and growth
            </li>
          </ul>
        </div>

        <div className="volunteer_roles" style={{background:'rgb(12, 82, 14)',marginBottom:'2rem', padding:'1rem 2rem', borderRadius:'20px', color:'white',width:'400px',height:'200px'}}>
          <ul style={{ listStyle: "none" }}>
            <h3 style={{ textAlign: "center", color: 'white' }}>
              Volunteer roles you can join
            </h3>
            <li>1. Mentorship & Coaching</li>
            <li>2. Graphic Design / Content Creation</li>
            <li>3. Fundraising & Partnership Team</li>
          </ul>
        </div>
      </div>

      <div className="teer_contact" style={{textAlign:'center',padding:'2rem 0'}}>
        <h2>Ready to make a difference?</h2>
        <p style={{fontSize:'1.2rem',marginBottom:'2rem'}}>Fill out our volunteer form and we'll connect you to a role that fits your passion and skills.</p>
      

      <div className="teer_btn">
                    <Link to="/contact" className={({isActive}) => isActive ? 'active' : ''}>
        <button style={{ width: '250px',
  height: 'auto',
  borderRadius: '20px',
  border: 'none',
  backgroundColor: 'rgb(241, 6, 84)',
  color: 'white',
  fontSize: '1.2rem',
  boxShadow: '0 5px 6px rgba(13, 13, 13, 0.2)',
  margin: '0',
  padding: '1rem'
  }}>Become a volunteer</button>
  </Link>
      </div>
      </div>

      <p style={{textAlign:'center',fontStyle:'italic',fontWeight:'500',fontSize:'1.2rem',color:'rgb(241, 6, 84)',marginBottom:'1rem'}}>"Together, let’s build a world where every girl knows her power."</p>
    </>
  );
}
export default Volunteer;
