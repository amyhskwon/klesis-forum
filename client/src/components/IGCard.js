import React, { useState, useEffect } from "react";
// import EditIG from "./EditIG";

function IGCard({ ig, user }) {
  const { name, location, weekday, time, id } = ig;
  const [myMemberships, setMyMemberships] = useState([]);
  const [hasUserJoined, setHasUserJoined] = useState(false);
  //   const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    fetch("/my_memberships")
      .then((r) => r.json())
      .then((data) => setMyMemberships(data));
  }, []);

  function isThereMembership(id) {
    return !!myMemberships.find((element) => {
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
      {/* {user.admin ? (
        <button onClick={setShowEditForm(!showEditForm)}>
          {showEditForm ? "Cancel" : "Edit Offer"}
          <EditIG ig={ig} />
        </button>
      ) : null} */}
    </div>
  );
}

export default IGCard;
