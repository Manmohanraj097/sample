import React from 'react';
import './EmployeeList.css';

const EmployeeList = ({ employees }) => {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      {employees.length > 0 ? (
        <ul>
          {employees.map((employee, index) => (
            <li key={index}>
              <strong>Name:</strong> {employee.name} | 
              <strong> Role:</strong> {employee.role} | 
              <strong> Contact:</strong> {employee.contact}
            </li>
          ))}
        </ul>
      ) : (
        <p>No employees added yet.</p>
      )}
    </div>
  );
};

export default EmployeeList;
