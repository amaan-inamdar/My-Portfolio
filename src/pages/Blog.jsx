import posts from "../data/posts";

function Blog() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.heading}>My <span style={styles.accent}>Blog</span></h1>
          <p style={styles.subtitle}>Thoughts and things I'm learning.</p>
        </div>

        <div style={styles.list}>
          {posts.map((post) => (
            <div key={post.id} style={styles.card}>
              <div style={styles.left}>
                <span style={styles.date}>{post.date}</span>
                <h2 style={styles.title}>{post.title}</h2>
                <p style={styles.excerpt}>{post.excerpt}</p>
              </div>
              <span style={styles.arrow}>→</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "90vh",
    padding: "4rem 2rem",
  },
  container: {
    maxWidth: "700px",
    margin: "0 auto",
  },
  pageHeader: {
    marginBottom: "2.5rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "0.5rem",
  },
  accent: {
    color: "#a78bfa",
  },
  subtitle: {
    color: "#666",
    fontSize: "1rem",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  card: {
    backgroundColor: "#111118",
    border: "1px solid #1e1e2e",
    borderRadius: "16px",
    padding: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    transition: "border-color 0.2s",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  date: {
    fontSize: "0.8rem",
    color: "#a78bfa",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  title: {
    fontSize: "1.15rem",
    fontWeight: "700",
    color: "#e8e8e8",
  },
  excerpt: {
    color: "#666",
    fontSize: "0.92rem",
    lineHeight: 1.6,
  },
  arrow: {
    color: "#a78bfa",
    fontSize: "1.5rem",
    flexShrink: 0,
  },
};

export default Blog;