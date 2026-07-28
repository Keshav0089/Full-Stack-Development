import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import StudentCard from "./components/studentCard";
import Attendance from "./components/attendance";
import "./studentCard.css"
import "./components/attendance.css"
import Counter from "./components/Counter"
function App() {
  const [activeSection, setActiveSection] = useState("students");

  const students = [
    { name: "Keshav", age: 20, course: "BE", grade: "A+" },
    { name: "abc", age: 21, course: "ECE", grade: "F" },
    { name: "jjj", age: 20, course: "BE", grade: "B" },
    { name: "mmm", age: 20, course: "BE", grade: "K" },
  ];

  const attendance = [
    { subject: "FSD-II", percent: "100%" },
    { subject: "C.N", percent: "90%" },
    { subject: "P.B", percent: "90%" },
  ];

  return (
    <div className="container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
 
      <div className="content">
        {activeSection === "students" && (
          <>
            <h1>Student Details</h1>

            <div className="cards">
              {students.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </>
        )}

        {activeSection === "attendance" && (
          <>
            <h1>Attendance</h1>

            <div className="cards">
              {attendance.map((item, index) => (
                <Attendance key={index} {...item} />
              ))}
            </div>
          </>
        )}
        <>
     
        </>
      </div>
    </div>
    
  );
}

export default App;