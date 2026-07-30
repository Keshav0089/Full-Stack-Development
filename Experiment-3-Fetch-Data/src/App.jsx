import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1 className="title">👨‍💻 User Directory</h1>

      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user.id}>
            <div className="avatar">
              {user.name.charAt(0)}
            </div>

            <h2>{user.name}</h2>

            <p>
              <strong>📧 Email:</strong> {user.email}
            </p>

            <p>
              <strong>📞 Phone:</strong> {user.phone}
            </p>

            <p>
              <strong>🌐 Website:</strong> {user.website}
            </p>

            <p>
              <strong>🏢 Company:</strong> {user.company.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;