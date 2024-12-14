import React from "react";

const EmployeeListItem = ({ employee }) => {
  return (
    <div className="employee-list-item">
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.title}</p>
      </div>
    </div>
  );
};

export default EmployeeListItem;
