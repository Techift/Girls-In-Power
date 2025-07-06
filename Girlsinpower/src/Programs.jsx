import { Link } from "react-router-dom";
function Programs() {
  return (
    <section className="programs">
      <h2
        style={{
          color: "rgb(241, 6, 84)",
        }}
      >
        {" "}
        Our Thematic Areas
      </h2>
      <div className="program-list">
        <div className="program">
          <h3>Mentorship</h3>
          <p>Connecting girls with experineced female leadrs to guide leadership growth journey.</p>
        </div>
        <div className="program">
          <h3>Policy Advocacy</h3>
          <p>To promote gender inclusive policies that support girls and women in leadership spaces.</p>
        </div>
        {/* <div className="program">
          <h3>Community Outreach</h3>
          <p>Raising awareness and driving policy change.</p>
        </div> */}
      </div>

          <br />
      <div className="program-list">
        <div className="program">
          <h3>Leadership Development</h3>
          <p>To train girls and women to lead confidently in communities, politics and governance.</p>
        </div>
        <div className="program">
          <h3>Policy Development</h3>
          <p>Research and propose youth-focused policies for gender-balanced leadership systems.</p>
        </div>{" "}
        </div>

      <div className="learnmorebtn">
        <Link
          to="/initiatives"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <button
            style={{
              backgroundColor: "rgb(241, 6, 84)",
              borderRadius: "20px",
              padding: "1rem 2rem",
              color: "white",
              fontSize:'1.2rem',
              marginBottom:'3rem'
            }}
          >
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
}
export default Programs;
