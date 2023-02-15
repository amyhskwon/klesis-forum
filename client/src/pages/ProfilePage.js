import React from "react";
import UserProfile from "../components/UserProfile";
import MyEventsList from "../components/MyEventsList";
import MyIGList from "../components/MyIGList";
import { NavLink } from "react-router-dom";

function ProfilePage({ user, igList }) {
  function amIModerator(id) {
    return !!igList.find((ig) => {
      return ig.moderator === id;
    });
  }
  return (
    <div>
      <UserProfile user={user} />
      <h1>Your Interest Groups</h1>
      <MyIGList />
      <h1>Your Upcoming Events</h1>
      <MyEventsList />
      {user.admin ? (
        <NavLink exact to="/admin">
          Admin Page
        </NavLink>
      ) : null}
      {amIModerator(user.id) ? (
        <NavLink exact to="/moderator">
          Moderator Page
        </NavLink>
      ) : null}
    </div>
  );
}

export default ProfilePage;
