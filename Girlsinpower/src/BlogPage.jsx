function BlogPage() {
  const posts = [
    {
      image: "/img/pic10.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
      image: "/img/pic22.jpg",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
    image: "/img/pic23.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },

    {
    image: "/img/pic13.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
    image: "/img/pic14.jpg",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
    image: "/img/pic15.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },

    {
    image: "/img/pic16.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
      image: "/img/pic17.jpg",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
      image: "/img/pic18.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },

    {
      image: "/img/pic19.jpg",
      title: "How to Build Confidence as a Girl",
      snippet:
        "Confidence starts with small steps. Here’s how to grow it daily...",
    },
    {
      image: "/img/pic20.jpg",
      title: "Top 5 Study Tips for Girls",
      snippet:
        "Studying smart matters more than studying long. These tips help you focus better...",
    },
    {
      image: "/img/pic21.jpg",
      title: "Girls Who Lead: Stories from Our Community",
      snippet:
        "Real stories of girls breaking boundaries in school and careers...",
    },
  ];

  return (
    <section style={{ padding: "8rem 2rem" }}>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
          color: "rgb(241, 6, 84)",
        }}
      >
        Welcome to our Blog
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
              boxShadow: "2px 4px 8px rgba(80, 80, 80, 0.2)",
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
        style={{
          display: "block",
          alignItems: "center",
          marginTop: "2rem",
          width: "100%",
          marginLeft: "33rem",
        }}
      ></div>
    </section>
  );
}

export default BlogPage;
