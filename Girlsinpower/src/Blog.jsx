import { ArrowRight } from "react-feather";
import { Link } from "react-router-dom";
function Blog() {
  const posts = [
    {
      // <img src="/img/girlsperf.png" alt="girls" />
      image: "/img/teach.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
      image: "/img/heropic.png",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
      image: "/img/train.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem"}}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center",color:'rgb(12, 82, 14)'}}
      >
        From the Blog
      </h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              // boxShadow: "2px 4px 8px rgba(80, 80, 80, 0.2)",
            }}
          >
            <img src={post.image} alt="" srcset="" style={{width: '100%',borderRadius:'20px',marginBottom:'20px'}}/>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {post.title}
            </h3>
            <p style={{ color: "#555" }}>{post.snippet}</p>
          </div>
        ))}
      </div>
      <div
        className="blogbtn"
        style={{display:'flex',
          justifyContent:'center',
          alignItems:'center',
           marginTop: "2rem",
            width:'100%',
          }}
      >
         <Link to="/blogpage" className={({isActive}) => isActive ? 'active' : ''} style={{textDecoration:'none'}}> <button style={{display:'flex', alignItems:'center',justifyContent:'center',}}> Visit our Blog <ArrowRight/> </button> </Link> 
      </div>
    </section>
  );
}

export default Blog;
