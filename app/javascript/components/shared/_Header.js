import React from "react";
import { Link } from "react-router-dom";

const _Header = () => {
  return (
    <div style={styles}>
      <h1>
        <Link to="/" style={{ textDecoration: "none" }}>
          Omega
        </Link>
      </h1>
    </div>
  );
};

export default _Header;

const styles = {
  top: "0",
  backgroundColor: "#00ADB5",
  position: "fixed",
  width: "80%",
  padding: "15px",
  zIndex: "1",
};
