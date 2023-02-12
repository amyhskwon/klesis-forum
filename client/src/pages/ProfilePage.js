import React from "react";
import UserProfile from "../components/UserProfile";
import CreateIG from "../components/CreateIG";

function ProfilePage({ user }) {
  return (
    <div>
      <UserProfile user={user} />
      {user.admin ? <CreateIG /> : null}
    </div>
  );
}

export default ProfilePage;
