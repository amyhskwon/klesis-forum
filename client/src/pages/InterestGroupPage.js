import React from "react";
import InterestGroupsList from "../components/InterestGroupsList";

function InterestGroupPage({ user }) {
  return (
    <div>
      <InterestGroupsList user={user} />
    </div>
  );
}

export default InterestGroupPage;
