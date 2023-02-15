import React, { useState, useEffect } from "react";

function UserProfile({ user }) {
  const [userDetails, setUserDetails] = useState([]);
  const id = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((data) => setUserDetails(data));
  }, [id]);

  return (
    <div>
      <img src={userDetails.photo} alt={userDetails.name} />
      <h1>
        Hello, {userDetails.first_name} {userDetails.last_name}!
      </h1>
      <h4>Class of {userDetails.grad_year}</h4>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone_number}</p>
    </div>
  );
}

export default UserProfile;
