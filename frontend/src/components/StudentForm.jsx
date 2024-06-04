import { useState } from "react";
import axios from "axios";
import { z } from "zod";

const defaultFormData = {
  name: "",
  dob: "",
  gender: "",
};

const studentSchema = z.object({
  name: z.string().min(10, "Name must be at least 10 characters"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
});

export default function StudentForm({ onStudentAdd }) {
  const [formData, setFormData] = useState(defaultFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    const result = studentSchema.safeParse(formData);
    if (!result.success) {
      for (let item of result.error.errors) {
        const path = item.path.join(".");
        const message = item.message;
        errors[path] = message;
        setFormErrors(errors);
        return;
      }
    }

    axios
      .post("http://localhost:3000/students", formData)
      .then((response) => {
        onStudentAdd(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
        {formErrors.name && (
          <div className="text-red-500">{formErrors.name}</div>
        )}
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
        {formErrors.dob && <div className="text-red-500">{formErrors.dob}</div>}
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
        {formErrors.gender && (
          <div className="text-red-500">{formErrors.gender}</div>
        )}
      </div>

      <button type="submit" onClick={handleSubmit} className="button">
        Submit
      </button>
    </form>
  );
}
