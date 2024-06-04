import { useState } from "react";
import axios from "axios";

export default function StudentForm({ onStudentAdd }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/students", formData)
      .then((response) => { onStudentAdd(response.data); })
      .catch((error) => { console.log(error); });
  };

  return (
    <form className="my-5">
      <div className="py-4">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="py-4">
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={formData.dob}
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="py-4">
        <label htmlFor="gender">Gender</label>
        <label>
          <input
            type="radio"
            name="gender"
            id="genderM"
            value="M"
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            id="gender"
            value="F"
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>

      <button type="submit" onClick={handleSubmit} className="button">
        Submit
      </button>
    </form>
  );
}
