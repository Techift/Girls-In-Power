import { ArrowRight } from "react-feather";
import { Link, Links, matchRoutes } from "react-router-dom";
import { ArrowRightCircle } from "react-feather";
function Blog() {
  const posts = [
    {
      image: "/img/pic2.jpg",
      title: "How to Build Confidence as a Girl",
      snippet: "NGO, Girls In Power Vpws to Take Over Leadership in Calabar.",
      link: "https://tribuneonlineng.com/over-200-schoolgirls-empowered-at-leadership-summit-in-calabar/ ",
    },
    {
      image: "/img/pic3.jpg",
      title: "GIP Youth Summit In Calabar ",
      snippet: "NGO Hols Youth Summit in Calabar",
      link: "https://dailyasset.ng/ngo-holds-youth-summit-in-calabar/",
    },
    {
      image: "/img/pic4.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "NGO Demands Sustained Training For Women To Occupy Leadership Positions",
      link: "https://newtelegraphng.com/ngo-demands-sustained-training-for-women-to-occupy-leadership-positions/",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem" }}>
      <p style={{ textAlign: "center",fontWeight:'600' }}>PRESS</p>
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
              padding: "2.5rem 1.5rem",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <img
              src={post.image}
              alt="GIP"
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
            <p style={{ color: "#555",marginBottom:'20px' }}>{post.snippet}</p>
            <Link to={post.link}>
              <p
                style={{
                  position: "absolute",
                  fontWeight: "600",
                  color: "rgb(12, 82, 14)",
                  textAlign: "left",
                  bottom: "0",
                  display:'flex',
                  gap:'8px',
                  marginBottom:'20px'
                }}
              >
                {" "}
                Read More <ArrowRightCircle/>
              </p>
            </Link>
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
              backgroundColor: "rgb(12, 82, 14)",
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
