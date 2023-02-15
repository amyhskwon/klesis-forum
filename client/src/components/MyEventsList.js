import React, { useState, useEffect } from "react";
import MyEventCard from "./MyEventCard";

function MyEventsList() {
  const [myEventsList, setMyEventsList] = useState([]);

  useEffect(() => {
    fetch("/rsvps")
      .then((r) => r.json())
      .then((data) => setMyEventsList(data));
  }, []);

  function renderMyEventsList() {
    return myEventsList.map((rsvp) => {
      return <MyEventCard key={rsvp.id} rsvp={rsvp} />;
    });
  }

  return <div>{renderMyEventsList()}</div>;
}

export default MyEventsList;
