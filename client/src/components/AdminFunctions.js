import React, { useState, useEffect } from "react";
import CreateIG from "./CreateIG";
import CreateEvent from "./CreateEvent";
import DeleteIG from "./DeleteIG";

function AdminFunctions({ igList, setIgList }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => setAllUsers(data));
  }, []);
  return (
    <div>
      <h1>Create an Interest Group</h1>
      <CreateIG allUsers={allUsers} />
      <h1>Create an Event</h1>
      <CreateEvent />
      <h1>Delete an Interest Group</h1>
      <DeleteIG igList={igList} setIgList={setIgList} allUsers={allUsers} />
    </div>
  );
}

export default AdminFunctions;
