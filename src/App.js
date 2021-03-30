import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Home from "./containers/Home/Home";
import Article from "./containers/Article/Article";
import Author from "./containers/Author/Author";
import AllArticlesPage from "./components/AllArticlesPage/AllArticlesPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Login from './containers/Authentication/Login';
import Transition from './containers/Transition/Transition';
import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/article/:id" exact>
          <Article />
        </Route>
        <Route path="/user/:id" exact>
          <Author />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/all-articles" exact>
          <AllArticlesPage />
        </Route>
        <Route path="/transition">
          <Transition />
        </Route>
      </Switch>
    </>
  );
}

export default App;
