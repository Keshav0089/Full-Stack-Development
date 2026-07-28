function Attendance({ subject, percent }) {
  return (
    <div className="attendance-card">
      <h3>{subject}</h3>
      <p>Attendance : {percent}</p>
    </div>
  );
}

export default Attendance;