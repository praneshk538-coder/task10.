import { useState } from "react";

const App = () => {

  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    city: ""
  });

  const [showDetails, setShowDetails] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={student.age}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={student.city}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <hr />

      {showDetails && (
        <div>
          <h2>Student Details</h2>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>City:</strong> {student.city}</p>
        </div>
      )}

    </div>
  );
};

export default App;