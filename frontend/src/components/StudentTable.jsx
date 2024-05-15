import { useEffect, useState } from "react";

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => handleButtonClick()}>
        Click Me
      </button>
    </>
  );
}
