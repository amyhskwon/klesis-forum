import React, { useEffect, useState } from "react";

function EventCard({ event, user }) {
  const { name, description, location, weekday, time, id } = event;
  const [rsvps, setRsvps] = useState([]);
  const [hasUserRsvped, setHasUserRsvped] = useState(false);

  useEffect(() => {
    fetch("/rsvps")
      .then((r) => r.json())
      .then((data) => setRsvps(data));
  }, []);

  function isThereRsvp(id) {
    return !!rsvps.find((element) => {
      return element.event_id === id;
    });
  }

  function handleRsvpForEvents() {
    fetch("/rsvps", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,
        event_id: id,
      }),
    })
      .then((r) => r.json())
      .then(console.log);

    setHasUserRsvped(!hasUserRsvped);
  }

  if (!user)
    return (
      <div>
        <p>this is logged out version</p>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{location}</p>
        <p>
          {weekday}, {time}
        </p>
      </div>
    );

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{location}</p>
      <p>
        {weekday}, {time}
      </p>
      {isThereRsvp(id) || hasUserRsvped ? null : (
        <button onClick={handleRsvpForEvents}>RSVP</button>
      )}
    </div>
  );
}

export default EventCard;
