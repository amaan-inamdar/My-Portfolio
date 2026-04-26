import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    const success = login(password);
    if (success) {
      navigate("/admin");
    } else {
      setError("Wrong password! Hint: admin123");
    }
  };

  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <div style={styles.topBar} />
        <div style={styles.body}>
          <h1 style={styles.heading}>Welcome back</h1>
          <p style={styles.sub}>Login to access the admin panel.</p>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>⚠ {error}</p>}

          <button onClick={handleLogin} style={styles.btn}>
            Login →
          </button>

          <p style={styles.hint}>Hint: password is <code style={styles.code}>admin123</code></p>
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
  },
  card: {
    backgroundColor: "#111118",
    border: "1px solid #1e1e2e",
    borderRadius: "20px",
    overflow: "hidden",
    width: "100%",
    maxWidth: "420px",
  },
  topBar: {
    height: "4px",
    background: "linear-gradient(90deg, #a78bfa, #7c3aed)",
  },
  body: {
    padding: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "800",
  },
  sub: {
    color: "#666",
    fontSize: "0.95rem",
    marginTop: "-0.5rem",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.85rem",
    color: "#aaa",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#0a0a0f",
    border: "1px solid #2a2a3e",
    borderRadius: "10px",
    padding: "0.8rem 1rem",
    color: "#e8e8e8",
    fontSize: "1rem",
    outline: "none",
    width: "100%",
  },
  error: {
    color: "#f87171",
    fontSize: "0.88rem",
    marginTop: "-0.5rem",
  },
  btn: {
    backgroundColor: "#a78bfa",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "0.85rem",
    fontSize: "1rem",
    fontWeight: "700",
    width: "100%",
    boxShadow: "0 0 20px rgba(167,139,250,0.25)",
  },
  hint: {
    color: "#444",
    fontSize: "0.82rem",
    textAlign: "center",
  },
  code: {
    color: "#a78bfa",
    backgroundColor: "#1e1e2e",
    padding: "0.1rem 0.4rem",
    borderRadius: "4px",
  },
};

export default Login;