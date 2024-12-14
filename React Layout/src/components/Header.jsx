import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Employee Directory</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ccc",
  },
};

export default Header;
