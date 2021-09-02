import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
