import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span style={styles.logo}>&lt;Amaan /&gt;</span>
        <div style={styles.links}>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
        </div>
        <p style={styles.copy}>© 2026 Amaan Inamdar. Built with React + Vite.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0d0d14",
    borderTop: "1px solid #1e1e2e",
    padding: "2rem",
  },
  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    color: "#a78bfa",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },
  links: {
    display: "flex",
    gap: "2rem",
  },
  link: {
    color: "#666",
    fontSize: "0.9rem",
    transition: "color 0.2s",
  },
  copy: {
    color: "#444",
    fontSize: "0.8rem",
  },
};

export default Footer;