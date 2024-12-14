import React from "react";

const SearchBar = () => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search employees..."
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    padding: "10px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default SearchBar;
