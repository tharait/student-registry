import axios from "axios";

export default function StudentTable({students, onStudentDelete}) {

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/students/${id}`)
    .then(() => onStudentDelete(id))
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
