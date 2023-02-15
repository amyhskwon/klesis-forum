import React, { useState } from "react";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [weekday, setWeekday] = useState(0);
  const [time, setTime] = useState("");
  const [isWeekly, setIsWeekly] = useState(true);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleCreateEvent() {
    fetch("/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: eventName,
        description,
        location,
        weekday,
        time,
        is_weekly: isWeekly,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then(console.log);
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleCreateEvent}>
      <p>Name</p>
      <input
        type="text"
        id="name"
        autoComplete="off"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <p>Description</p>
      <input
        type="text"
        id="description"
        autoComplete="off"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>Location</p>
      <input
        type="text"
        id="location"
        autoComplete="off"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <label>Weekday</label>
      <select
        id="weekday"
        value={weekday}
        onChange={(e) => setWeekday(parseInt(e.target.value))}
      >
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
        <option value="7">Sunday</option>
      </select>
      <p>Time</p>
      <input
        type="time"
        id="time"
        min="01:00"
        max="11:00"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label>Weekly?</label>
      <select
        id="is-weekly"
        value={isWeekly}
        onChange={(e) => setIsWeekly(e.target.value)}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button type="submit">{isLoading ? "Loading..." : "Create"}</button>
      {errors.map((err) => (
        <p key={err}>{err}</p>
      ))}
    </form>
  );
}

export default CreateEvent;
