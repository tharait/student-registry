import { useEffect, useState } from "react";
import './App.css';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    fetch("http://localhost:3000/students")
    .then((response) => response.json())
    .then((data) => setStudents(data));
  }

  const handleStudentAdd = (student) => {
    loadStudents();
  }

  return (
    <>
      <StudentForm onStudentAdd={handleStudentAdd}/>
      <hr />
      <StudentTable students={students} onStudentDelete={loadStudents}/>
    </>
  )
}

export default App
