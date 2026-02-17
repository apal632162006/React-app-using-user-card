import React from "react";

function UserCard({ user }) {
    return (
        <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "16px", width: "300px" }}>
            <h2>{user.name}</h2>
            <p><strong>Profession:</strong> {user.profession}</p>
            <p><strong>Location:</strong> {user.location}</p>
        </div>
    );
}

export default UserCard;