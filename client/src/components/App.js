import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import About from "../pages/About";
import InterestGroupPage from "../pages/InterestGroupPage";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import WhatWeDo from "./WhatWeDo";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user)
  return (
    <>
      <div>
        <NavBar user={user} setUser={setUser} />
        <main>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/interest_groups">
              <InterestGroupPage />
            </Route>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/contact">
              <Contact />
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

  // return (
  //   <div>
  //     <NavBar setUser={setUser} />
  //     <main>
  //       <Switch>
  //         <Route path="/about">
  //           <About />
  //         </Route>
  //         <Route path="/interest_groups">
  //           <InterestGroupPage />
  //         </Route>
  //         <Route path="/events">
  //           <Events />
  //         </Route>
  //         <Route path="/contact">
  //           <Contact />
  //         </Route>
  //         <Route path="/login">
  //           <Login onLogin={setUser} />
  //         </Route>
  //         <Route path="/">
  //           <WhatWeDo />
  //         </Route>
  //       </Switch>
  //     </main>
  //   </div>
  // );
}

export default App;
