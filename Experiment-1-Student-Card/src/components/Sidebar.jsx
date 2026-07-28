function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>

      <button
        className={`menu-item ${
          activeSection === "students" ? "active" : ""
        }`}
        onClick={() => setActiveSection("students")}
      >
        👨‍🎓 Students
      </button>

      <button
        className={`menu-item ${
          activeSection === "attendance" ? "active" : ""
        }`}
        onClick={() => setActiveSection("attendance")}
      >
        📅 Attendance
      </button>
    </div>
  );
}

export default Sidebar;