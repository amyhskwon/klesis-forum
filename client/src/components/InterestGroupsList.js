import React, { useState, useEffect } from "react";
import IGCard from "./IGCard";

function InterestGroupsList({ user }) {
  const [igList, setIgList] = useState([]);

  useEffect(() => {
    fetch("/interest_groups")
      .then((r) => r.json())
      .then((data) => setIgList(data));
  }, []);

  function renderInterestGroupsList() {
    return igList.map((ig) => {
      return <IGCard key={ig.id} ig={ig} user={user} />;
    });
  }

  return <div>{renderInterestGroupsList()}</div>;
}

export default InterestGroupsList;
