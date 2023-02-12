import React, { useEffect, useState } from "react";

function IGCard({ ig, user }) {
  const { name, location, weekday, time, id } = ig;
  const [memberships, setMemberships] = useState([]);
  const [hasUserJoined, setHasUserJoined] = useState(false);

  useEffect(() => {
    fetch("/memberships")
      .then((r) => r.json())
      .then((data) => setMemberships(data));
  }, []);

  function isThereMembership(id) {
    return !!memberships.find((element) => {
      return element.interest_group_id === id;
    });
  }

  function handleJoinInterestGroup() {
    fetch("/memberships", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        interest_group_id: id,
      }),
    })
      .then((r) => r.json())
      .then(console.log);

    setHasUserJoined(!hasUserJoined);
  }

  if (!user)
    return (
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
        <p>
          {weekday}, {time}
        </p>
      </div>
    );

  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>
        {weekday}, {time}
      </p>
      {isThereMembership(id) || hasUserJoined ? null : (
        <button onClick={handleJoinInterestGroup}>Join</button>
      )}
    </div>
  );
}

export default IGCard;
