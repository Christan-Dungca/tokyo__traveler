import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from './components/Navigation/Navigation';
import Home from "./containers/Home/Home";
import Article from "./containers/Article/Article";
import AllArticlesPage from "./components/AllArticlesPage/AllArticlesPage";
import AboutPage from "./components/AboutPage/AboutPage";
import "./App.scss";

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/all-articles" exact>
          <AllArticlesPage />
        </Route>
        <Route path="/article/:id" exact>
          <Article />
        </Route>
      </Switch>
    </>
  );
}

export default App;
