import React, { useState } from "react";
import CreateEvent from "./CreateEvent";

function CreateEventButton() {
  const [showCreateEventForm, setShowCreateEventForm] = useState(false);

  function showOrHideForm() {
    setShowCreateEventForm(!showCreateEventForm);
  }

  return (
    <div>
      <button onClick={showOrHideForm}>Create an Event</button>
      {showCreateEventForm ? <CreateEvent /> : null}
    </div>
  );
}

export default CreateEventButton;
