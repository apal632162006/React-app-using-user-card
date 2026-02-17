import UserCard from "./UserCard";
import "./App.css";

function App() {
  const users = [
    {
      id: 1,
      name: "Ashish Pal",
      profession: "Software Engineer Student",
      location: "Delhi"
    },
  ];

  return (
    <div className="app-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100vh" }}>
      <h1 className="title">User Cards</h1>

      <div className="card-container">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;