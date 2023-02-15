import React from "react";

function MyEventCard({ rsvp }) {
  return (
    <div>
      <h2>{rsvp.event.name}</h2>
      <p>{rsvp.event.description}</p>
      <p>{rsvp.event.location}</p>
      <p>
        {rsvp.event.weekday}, {rsvp.event.time}
      </p>
      {rsvp.event.is_weekly ? <p>This event will occur weekly!</p> : null}
    </div>
  );
}

export default MyEventCard;
