function Impact() {
  return (
    <section
      className="impact"
      style={{
        padding: "0",
        padding:'2rem',
        borderRadius:'20px'
      }}
    >
      
      <div className="impact_stories">
        {/* <h2>Impact & Success Stories</h2> */}
        <p className="stats" >

          
          {" "}
          <span> 5000+ </span> girls educated <span> 100+</span> scholarships
          awarded
        </p>
        <blockquote
          className="testimonial"
          style={{
            width: "500px",
            height: "120px",
            marginRight: "15px",
            // overflow:'scroll'
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
      {/* 
      <blockquote className="testimonial">
        "Thanks to Girls In Power, I now attend university and mentor younger
        girls in my community." – Amina, Lagos
      </blockquote> */}
{/*             
      <div className="gallery" style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'1rem'
      }}>
       
        <img
          src="/img/girlsinpower2.jpg"
          alt="Mentorship program"
          style={{
            zIndex: "1",
          }}
        />
      </div> */}
    </section>
  );
}
export default Impact;
