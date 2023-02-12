import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";

function EventsList({ user }) {
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetch("/events")
      .then((r) => r.json())
      .then((data) => setEventsList(data));
  }, []);

  function renderEventsList() {
    return eventsList.map((event) => {
      return <EventCard key={event.id} event={event} user={user} />;
    });
  }

  return <div>{renderEventsList()}</div>;
}

export default EventsList;
