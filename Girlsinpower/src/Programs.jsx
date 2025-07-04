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
        Our Programs & Initiatives
      </h2>
      <div className="program-list">
        <div className="program">
          <h3>Education & Scholarships</h3>
          <p>Providing learning resources and financial aid.</p>
        </div>
        <div className="program">
          <h3>Skill Development</h3>
          <p>Teaching life and career skills for a better and future.</p>
        </div>
        {/* <div className="program">
          <h3>Community Outreach</h3>
          <p>Raising awareness and driving policy change.</p>
        </div> */}
      </div>

          <br />
      <div className="program-list">
        <div className="program">
          <h3>Leadership & Mentorship</h3>
          <p>Connecting girls with mentors and role models.</p>
        </div>
        <div className="program">
          <h3>Health & Well-being</h3>
          <p>Promoting physical and mental well-being.</p>
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
