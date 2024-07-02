"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/students/${id}`)
    .then(() => onStudentDelete(id))
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    fetch("http://localhost:3001/students")
    .then((response) => response.json())
    .then((data) => setStudents(data));
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td><button type="button" onClick={() => handleDelete(student.id) }>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
