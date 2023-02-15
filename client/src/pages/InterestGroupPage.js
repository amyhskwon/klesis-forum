import React from "react";
import InterestGroupsList from "../components/InterestGroupsList";

function InterestGroupPage({ user, igList }) {
  return (
    <div>
      <InterestGroupsList user={user} igList={igList} />
    </div>
  );
}

export default InterestGroupPage;
