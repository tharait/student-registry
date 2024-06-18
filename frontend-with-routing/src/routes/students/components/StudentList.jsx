import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadStudents = async () => {
    // const response = await axios.get("http://localhost:3000/students");
    // setStudents(response.data);
    setLoading(true);
    axios
      .get("http://localhost:3000/students")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadStudents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {students &&
        students.map((student) => <StudentListItem key={student.id} student={student} />)}
    </>
  );
}

function StudentListItem({student}) {
  return (
    <Link to={`/students/detail/${student.id}`}>
    <div>
        <div>{student.name}</div>
        <div>{student.dob} {student.gender}</div>
    </div>
    </Link>
  )
}

