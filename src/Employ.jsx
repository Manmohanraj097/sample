import React, { useState } from 'react';
import './EmployeeForm.css';

const EmployeeForm = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = { name, role, contact };
    addEmployee(newEmployee);
    setName('');
    setRole('');
    setContact('');
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Role:</label>
      <input
        type="text"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      />

      <label>Contact:</label>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />

      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
