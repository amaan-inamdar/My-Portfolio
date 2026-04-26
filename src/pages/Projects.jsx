import projects from "../data/projects";

function Projects() {
  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.pageHeader}>
          <h1 style={styles.heading}>My <span style={styles.accent}>Projects</span></h1>
          <p style={styles.subtitle}>Things I've built while learning.</p>
        </div>

        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.card}>
              {/* Top colored bar */}
              <div style={styles.cardBar} />

              <div style={styles.cardBody}>
                <h2 style={styles.title}>{project.title}</h2>
                <p style={styles.desc}>{project.description}</p>

                <div style={styles.techRow}>
                  {project.tech.map((t) => (
                    <span key={t} style={styles.tag}>{t}</span>
                  ))}
                </div>

                <a href={project.link} style={styles.link}>
                  View Project →
                </a>
              </div>
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
    maxWidth: "900px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#111118",
    border: "1px solid #1e1e2e",
    borderRadius: "16px",
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  cardBar: {
    height: "4px",
    background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
  },
  cardBody: {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#e8e8e8",
  },
  desc: {
    color: "#888",
    fontSize: "0.95rem",
    lineHeight: 1.7,
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.25rem",
  },
  tag: {
    backgroundColor: "#1e1e2e",
    color: "#a78bfa",
    padding: "0.25rem 0.7rem",
    borderRadius: "999px",
    fontSize: "0.78rem",
    fontWeight: "600",
  },
  link: {
    color: "#a78bfa",
    fontSize: "0.9rem",
    fontWeight: "600",
    marginTop: "0.5rem",
  },
};

export default Projects;