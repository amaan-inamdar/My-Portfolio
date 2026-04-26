function About() {
  const skills = [
    { name: "React", level: "80%" },
    { name: "JavaScript", level: "75%" },
    { name: "HTML & CSS", level: "90%" },
    { name: "Git", level: "65%" },
    { name: "Vite", level: "70%" },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <div style={styles.avatar}>AI</div>
          <div>
            <h1 style={styles.name}>Amaan Inamdar</h1>
            <p style={styles.role}>Frontend Developer · Pune, India 🇮🇳</p>
          </div>
        </div>

        {/* Bio */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <p style={styles.bio}>
            Hey! I'm Amaan, a passionate developer from Pune, India.
            I love building web applications and learning new technologies
            every day. This portfolio is my first ever React project and
            I'm proud of how far I've come!
          </p>
          <p style={{ ...styles.bio, marginTop: "1rem" }}>
            When I'm not coding, I enjoy exploring new tech, watching
            tutorials, and working on side projects.
          </p>
        </div>

        {/* Skills */}
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <div style={styles.skillsList}>
            {skills.map((skill) => (
              <div key={skill.name} style={styles.skillItem}>
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={styles.skillPercent}>{skill.level}</span>
                </div>
                <div style={styles.barBg}>
                  <div style={{ ...styles.barFill, width: skill.level }} />
                </div>
              </div>
            ))}
          </div>
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
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  avatar: {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    backgroundColor: "#1e1e2e",
    border: "2px solid #a78bfa",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#a78bfa",
    flexShrink: 0,
  },
  name: {
    fontSize: "2rem",
    fontWeight: "800",
    marginBottom: "0.3rem",
  },
  role: {
    color: "#888",
    fontSize: "1rem",
  },
  card: {
    backgroundColor: "#111118",
    border: "1px solid #1e1e2e",
    borderRadius: "16px",
    padding: "1.75rem",
  },
  sectionTitle: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#a78bfa",
    marginBottom: "1.25rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  bio: {
    color: "#aaa",
    lineHeight: 1.9,
    fontSize: "1rem",
  },
  skillsList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  skillHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  skillName: {
    fontSize: "0.95rem",
    color: "#e8e8e8",
  },
  skillPercent: {
    fontSize: "0.85rem",
    color: "#a78bfa",
  },
  barBg: {
    backgroundColor: "#1e1e2e",
    borderRadius: "999px",
    height: "6px",
    overflow: "hidden",
  },
  barFill: {
    backgroundColor: "#a78bfa",
    height: "100%",
    borderRadius: "999px",
    transition: "width 0.6s ease",
  },
};

export default About;