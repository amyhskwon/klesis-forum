import React, { useEffect, useState } from "react";
import Messages from "./components/Messages";

function IGDetails({ user }) {
  const [igDetails, setIgDetails] = useState([]);
  const id = new URLSearchParams(window.location.search).get("id");

  useEffect(() => {
    fetch(`/interest_groups/${id}`)
      .then((r) => r.json())
      .then((data) => setIgDetails(data));
  }, []);

  return (
    <div>
      <h1>{igDetails.name}</h1>
      <h3>{igDetails.description}</h3>
      <p>Location: {igDetails.location}</p>
      <p>
        Time: {igDetails.weekday}, {igDetails.time}
      </p>
      <Messages igDetails={igDetails} />
    </div>
  );
}

export default IGDetails;
