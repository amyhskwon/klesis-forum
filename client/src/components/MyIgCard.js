import React from "react";
import { NavLink } from "react-router-dom";

function MyIgCard({ membership }) {
  return (
    <div>
      <h2>{membership.interest_group.name}</h2>
      <p>{membership.interest_group.description}</p>
      <p>{membership.interest_group.location}</p>
      <p>
        {membership.interest_group.weekday}, {membership.interest_group.time}
      </p>
      {membership.interest_group.is_weekly ? <p>Weekly ✅</p> : null}
      <NavLink exact to={`/my_memberships?id=${membership.interest_group.id}`}>
        See Details
      </NavLink>
    </div>
  );
}

export default MyIgCard;
