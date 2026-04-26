import { Link } from "react-router-dom";

function Home() {
  return (
    <main style={styles.main}>
      {/* Glow effect background */}
      <div style={styles.glow} />

      <div style={styles.hero}>
        <p style={styles.greeting}>👋 Hello, world!</p>
        <h1 style={styles.heading}>
          I'm <span style={styles.accent}>Amaan Inamdar</span>
        </h1>
        <h2 style={styles.subheading}>Frontend Developer & React Enthusiast</h2>
        <p style={styles.desc}>
          I build clean, fast, and modern web experiences.
          Currently learning React and loving every bit of it.
        </p>
        <div style={styles.btnGroup}>
          <Link to="/projects" style={styles.primaryBtn}>View My Work</Link>
          <Link to="/about" style={styles.secondaryBtn}>About Me</Link>
        </div>

        {/* Stats row */}
        <div style={styles.stats}>
          <div style={styles.stat}>
            <span style={styles.statNum}>2+</span>
            <span style={styles.statLabel}>Projects</span>
          </div>
          <div style={styles.divider} />
          <div style={styles.stat}>
            <span style={styles.statNum}>1</span>
            <span style={styles.statLabel}>Month Learning</span>
          </div>
          <div style={styles.divider} />
          <div style={styles.stat}>
            <span style={styles.statNum}>∞</span>
            <span style={styles.statLabel}>Passion</span>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    width: "500px",
    height: "500px",
    background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)",
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  },
  hero: {
    textAlign: "center",
    maxWidth: "680px",
    position: "relative",
    zIndex: 1,
  },
  greeting: {
    fontSize: "1rem",
    color: "#a78bfa",
    marginBottom: "1rem",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  heading: {
    fontSize: "3.5rem",
    fontWeight: "800",
    marginBottom: "0.5rem",
    lineHeight: 1.15,
  },
  accent: {
    color: "#a78bfa",
  },
  subheading: {
    fontSize: "1.3rem",
    color: "#888",
    fontWeight: "400",
    marginBottom: "1.2rem",
  },
  desc: {
    fontSize: "1.05rem",
    color: "#666",
    lineHeight: 1.8,
    marginBottom: "2rem",
    maxWidth: "500px",
    margin: "0 auto 2rem",
  },
  btnGroup: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    marginBottom: "3rem",
  },
  primaryBtn: {
    backgroundColor: "#a78bfa",
    color: "#fff",
    padding: "0.8rem 2rem",
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "1rem",
    boxShadow: "0 0 20px rgba(167,139,250,0.3)",
  },
  secondaryBtn: {
    backgroundColor: "transparent",
    color: "#a78bfa",
    padding: "0.8rem 2rem",
    borderRadius: "8px",
    border: "1px solid #a78bfa",
    fontWeight: "700",
    fontSize: "1rem",
  },
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    marginTop: "1rem",
    padding: "1.5rem 2rem",
    backgroundColor: "#111118",
    borderRadius: "16px",
    border: "1px solid #1e1e2e",
  },
  stat: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.3rem",
  },
  statNum: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#a78bfa",
  },
  statLabel: {
    fontSize: "0.8rem",
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  divider: {
    width: "1px",
    height: "40px",
    backgroundColor: "#1e1e2e",
  },
};

export default Home;