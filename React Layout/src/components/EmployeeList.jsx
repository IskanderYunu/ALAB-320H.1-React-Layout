import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const employees = [
  { id: 1, name: "Bark Twain", title: "Head of Barketing" },
  { id: 2, name: "Purr Lock Holmes", title: "Lead Meowmager" },
  { id: 3, name: "Chewbarka", title: "VP of Fetch-nology" },
  { id: 4, name: "Sir Waggington", title: "Director of Tail Operations" },
  { id: 5, name: "Meowise Parker", title: "Chief of Naps" },
  { id: 6, name: "Fur-guson", title: "Sniffing Strategist" },
];

const EmployeeList = () => {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeListItem key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
