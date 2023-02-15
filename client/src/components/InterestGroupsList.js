import React from "react";
import IGCard from "./IGCard";

function InterestGroupsList({ user, igList }) {
  function renderInterestGroupsList() {
    return igList.map((ig) => {
      return <IGCard key={ig.id} ig={ig} user={user} />;
    });
  }

  return <div>{renderInterestGroupsList()}</div>;
}

export default InterestGroupsList;
