import React, { useState, useEffect } from "react";
import MyIgCard from "./MyIgCard";

function MyIGList({ user }) {
  const [myIgList, setMyIgList] = useState([]);

  useEffect(() => {
    fetch("/my_memberships")
      .then((r) => r.json())
      .then((data) => setMyIgList(data));
  }, []);

  function renderMyInterestGroupsList() {
    return myIgList.map((membership) => {
      return (
        <MyIgCard key={membership.id} membership={membership} user={user} />
      );
    });
  }

  return <div>{renderMyInterestGroupsList()}</div>;
}

export default MyIGList;
