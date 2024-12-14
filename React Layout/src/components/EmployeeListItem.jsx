import React from "react";

const EmployeeListItem = ({ employee }) => {
  return (
    <div style={styles.item}>
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.title}</p>
      </div>
    </div>
  );
};

const styles = {
  item: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
  },
};

export default EmployeeListItem;
