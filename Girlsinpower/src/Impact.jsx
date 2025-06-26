function Impact() {
  return (
    <section
      className="impact"
      style={{
        padding:'2rem',
        borderRadius:'20px',
        margin:'0 auto',
      }}
    >
      
      <div className="impact_stories">
        <p className="stats" 
        style={{
          display:'flex',
          gap:'20px',
        }}>

          
          {" "}
          <div
          style={{
            color:'grey',
            fontStyle:'italic'
          }}>
          <span>5000+</span> girls educated </div>
           
          <div
          style={{
            color:'grey',
            fontStyle:'italic'
          }}><span> 100+</span>scholarships awarded</div>
          
        </p>
        <blockquote
          className="testimonial"
          style={{
            width: "100%",
            maxWidth:'500px',
            height: "auto",
          }}
        >
          <span style={{ color: "rgb(241, 6, 84)", fontWeight: "500" }}>
            Testimonials
          </span>{" "}
          <br />
          "Thanks to Girls In Power, I now attend university and mentor younger
          girls in my community." – Amina, Lagos
        </blockquote>
      </div>
    </section>
  );
}
export default Impact;
