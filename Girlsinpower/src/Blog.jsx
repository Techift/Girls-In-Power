// function Blog() {
//   return (
//     <section className="blog">
//       <h2>Blog & Resources</h2>
//       <ul className="blog-list">
//         <li>How Education Changes Lives</li>
//         <li>Leadership Tips for Teenage Girls</li>
//         <li>Our 2024 Gender Equality Report</li>
//       </ul>
//     </section>
//   );
// }
// export default Blog

// Blog.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },
  ];

  return (
    <section style={{ padding: "4rem 2rem", background: "#fdf6f9" }}>
      <h2
        style={{ fontSize: "2rem", marginBottom: "2rem", textAlign: "center" }}
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
              boxShadow: "2px 4px 8px rgba(237, 23, 23, 0.8)",
            }}
          >
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              {post.title}
            </h3>
            <p style={{ color: "#555" }}>{post.snippet}</p>
          </div>
        ))}
      </div>

      <div className="blogbtn" style={{ textAlign: "center", marginTop: "2rem", }}> 
        <button>Visit our Blog</button>
      </div>

    </section>
  );
}

export default Blog;
