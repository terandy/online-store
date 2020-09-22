import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";

import { TopNavBar, SideNavBar } from "./components/navigation";
import About from "./views/about";
import Products from "./views/products";
import Home from "./views/home";

const App = () => {
  return (
    <>
      <SideNavBar />
      <TopNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
      </Switch>
    </>
  );
};

export default App;
