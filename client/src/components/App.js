import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "../pages/About";
import InterestGroupPage from "../pages/InterestGroupPage";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import WhatWeDo from "./WhatWeDo";
import ProfilePage from "../pages/ProfilePage";
import AdminFunctions from "./AdminFunctions";
import ModeratorFunctions from "./ModeratorFunctions";
import IGDetailsPage from "../pages/IGDetailsPage";

function App() {
  const [user, setUser] = useState({});
  const [igList, setIgList] = useState([]);

  useEffect(() => {
    fetch("/interest_groups")
      .then((r) => r.json())
      .then((data) => setIgList(data));
  }, []);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      } else {
        console.log("Failed to login");
      }
    });
  }, []);

  return (
    <>
      <div>
        <NavBar user={user} setUser={setUser} />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path={"/my_memberships"}>
              <IGDetailsPage user={user} />
            </Route>
            <Route path="/interest_groups">
              <InterestGroupPage user={user} igList={igList} />
            </Route>
            <Route path="/events">
              <Events user={user} />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              <ProfilePage user={user} igList={igList} />
            </Route>
            <Route path="/admin">
              <AdminFunctions igList={igList} setIgList={setIgList} />
            </Route>
            <Route path="/moderator">
              <ModeratorFunctions />
            </Route>
            <Route path="/login">
              <Login onLogin={setUser} />
            </Route>
            <Route path="/">
              <WhatWeDo />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
}

export default App;
