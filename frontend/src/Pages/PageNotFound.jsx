import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you’re looking for doesn’t exist.</p>
      <p style={styles.suggestion}>
        Perhaps you were searching for a match? Let's get you back on track!
      </p>
      <button style={styles.button} onClick={() => (window.location.href = "/")}>
        Go Back to Home
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f7dde3",
    color: "#333",
    fontFamily: "'Arial', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#800020", // Match the matrimonial theme color
  },
  message: {
    fontSize: "1.5rem",
    margin: "20px 0",
  },
  suggestion: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#800020", // Same theme color
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default PageNotFound;
