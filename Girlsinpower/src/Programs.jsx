function Programs() {
  return (
    <section className="programs">
      {/* <h2>Our Programs & Initiatives</h2> */}
      <div className="program-list">
        <div className="program">
          <h3>Education & Scholarships</h3>
          <p>Providing learning resources and financial aid.</p>
        </div>
        <div className="program">
          <h3>Skill Development</h3>
          <p>Teaching life and career skills for a better future.</p>
        </div>
        <div className="program">
          <h3>Leadership & Mentorship</h3>
          <p>Connecting girls with mentors and role models.</p>
        </div>
        <div className="program">
          <h3>Health & Well-being</h3>
          <p>Promoting physical and mental well-being.</p>
        </div>{" "}
        {/* <div className="program">
          <h3>Community Outreach</h3>
          <p>Raising awareness and driving policy change.</p>
        </div> */}
      </div>
      
      <div className="learnmorebtn">
        <button style={{
          backgroundColor:'rgb(245, 45, 111)',
          borderRadius:'20px',
          padding:'1rem 2rem',
          color:'white'
        }}>Learn More</button>
      </div>
    </section>
  );
}
export default Programs;
