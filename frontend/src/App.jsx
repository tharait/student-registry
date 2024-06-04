import { useEffect, useState } from "react";
import './App.css';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';
import SectionTitle from "./components/SectionTitle";
import { useToast } from "./hooks/useToast";

function App() {
  const [students, setStudents] = useState([]);
  const {toasts, addToast, removeToast} = useToast();

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {
    fetch("http://localhost:3000/students")
    .then((response) => response.json())
    .then((data) => setStudents(data));
  }

  const handleStudentAdd = (student) => {
    addToast(`Added ${student.name}`);
    loadStudents();
  }

  return (
    <>
      {toasts && toasts.map((toast, index) => (
        <div key={index} className="toast">
          {toast}
          <button onClick={() => removeToast(index)}>X</button>
        </div>
      ))}
      <SectionTitle>
        <h1>Student Management</h1>
      </SectionTitle>
      <StudentForm onStudentAdd={handleStudentAdd} />
      <StudentTable students={students} onStudentDelete={loadStudents}/>
    </>
  )
}

export default App
