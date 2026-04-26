import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        &lt;Amaan /&gt;
      </Link>
      <div style={styles.links}>
        {["/", "/about", "/projects", "/blog"].map((path) => {
          const labels = { "/": "Home", "/about": "About", "/projects": "Projects", "/blog": "Blog" };
          return (
            <Link
              key={path}
              to={path}
              style={{
                ...styles.link,
                color: isActive(path) ? "#a78bfa" : "#aaa",
                borderBottom: isActive(path) ? "2px solid #a78bfa" : "2px solid transparent",
              }}
            >
              {labels[path]}
            </Link>
          );
        })}
        {isLoggedIn ? (
          <>
            <Link to="/admin" style={styles.link}>Admin</Link>
            <button onClick={logout} style={styles.btn}>Logout</button>
          </>
        ) : (
          <Link to="/login" style={styles.loginBtn}>Login</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 3rem",
    backgroundColor: "rgba(10,10,15,0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #1e1e2e",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#a78bfa",
    letterSpacing: "1px",
  },
  links: {
    display: "flex",
    gap: "2rem",
    alignItems: "center",
  },
  link: {
    color: "#aaa",
    fontSize: "0.95rem",
    paddingBottom: "2px",
    transition: "color 0.2s",
  },
  loginBtn: {
    backgroundColor: "#a78bfa",
    color: "#fff",
    padding: "0.4rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "transparent",
    border: "1px solid #a78bfa",
    color: "#a78bfa",
    padding: "0.4rem 1rem",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
};

export default Navbar;