import "./App.css";
import React from "react";
import Movielist from "./pages/movielist/movielist";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Description from "./pages/description/description";
import Principal from "./pages/principal/principal";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/principal" />
      </Route>
      <Route path="/principal">
        <Principal/>
      </Route>
      <Route path="/movielist">
        <Movielist />
      </Route>
      <Route path="/description">
        <Description />
      </Route>
    </BrowserRouter>
  );
};

export default App;
