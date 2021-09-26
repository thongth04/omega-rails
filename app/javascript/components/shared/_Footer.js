import React from "react";

const _Footer = () => {
  return (
    <div style={styles}>
      <p>
        &copy;Copyright 2021:{" "}
        <span style={{ fontWeight: "bold" }}>Tu Hoang Thong</span>
      </p>
      <p>
        <small>
          Email: <a href="#">thongth0497@gmail.com</a>
        </small>
      </p>
    </div>
  );
};

export default _Footer;

const styles = {
  // bottom: 0,
  // position: "absolute",
  padding: "20px",
  width: "100%",
  fontSize: "20px",
  fontStyle: "italic",
  backgroundColor: "#00ADB5",
  textAlign: "center",
};
