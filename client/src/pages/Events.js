import React from "react";
import EventsList from "../components/EventsList";

function Events({ user }) {
  return (
    <div>
      <EventsList user={user} />
    </div>
  );
}

export default Events;
