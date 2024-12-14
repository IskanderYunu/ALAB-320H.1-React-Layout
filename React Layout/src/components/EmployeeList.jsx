import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const employees = [
  { id: 1, name: "James King", title: "President and CEO" },
  { id: 2, name: "Julie Taylor", title: "VP of Marketing" },
  { id: 3, name: "Eugene Lee", title: "CFO" },
  { id: 4, name: "John Williams", title: "VP of Engineering" },
  { id: 5, name: "Ray Moore", title: "VP of Sales" },
  { id: 6, name: "Paul Jones", title: "QA Manager" },
];

const EmployeeList = () => {
  return (
    <div style={styles.list}>
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

const styles = {
  list: {
    padding: "10px",
  },
};

export default EmployeeList;
