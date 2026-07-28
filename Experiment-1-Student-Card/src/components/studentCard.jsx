function StudentCard({ name, age, course, grade }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Age : {age}</p>
      <p>Course : {course}</p>
      <p>Grade : {grade}</p>
    </div>
  );
}

export default StudentCard;