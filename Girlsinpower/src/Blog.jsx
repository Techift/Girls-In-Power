import { ArrowRight } from "react-feather";
import { Link, Links, matchRoutes } from "react-router-dom";
function Blog() {
  const posts = [
    {
      image: "/img/pic2.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
      link: "https://drive.google.com/drive/folders/1KA3Us6wh-c-yHbNwrZP4Mr8R2n0yVG2a?usp=sharing ",
    },
    {
      image: "/img/pic3.jpg",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
      link: "https://drive.google.com/drive/folders/1KA3Us6wh-c-yHbNwrZP4Mr8R2n0yVG2a?usp=sharing ",
    },
    {
      image: "/img/pic4.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
      link: "https://drive.google.com/drive/folders/1KA3Us6wh-c-yHbNwrZP4Mr8R2n0yVG2a?usp=sharing ",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem" }}>
      <p style={{textAlign:'center'}}>PRESS</p>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          color: "rgb(12, 82, 14)",
        }}
      >
        GIP IN THE NEWS/SPOTLIGHT
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
            }}
          >
            <img
              src={post.image}
              alt=""
              srcset=""
              style={{
                width: "100%",
                borderRadius: "20px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {post.title}
            </h3>
            <p style={{ color: "#555" }}>
              {post.snippet} <Link to={post.link}>Read More</Link>
            </p>
          </div>
        ))}
      </div>
      <div
        className="blogbtn"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          width: "100%",
        }}
      >
        <Link
          to="/blogpage"
          className={({ isActive }) => (isActive ? "active" : "")}
          style={{ textDecoration: "none" }}
        >
          {" "}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            Visit our NewsLetter <ArrowRight />{" "}
          </button>{" "}
        </Link>
      </div>
    </section>
  );
}

export default Blog;
