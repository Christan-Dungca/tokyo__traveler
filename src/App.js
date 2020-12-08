import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Layout from "./containers/Layout/Layout";
import Home from "./containers/Home/Home";
import Article from "./containers/Article/Article";

function App() {
  return (
    <Layout className="Layout">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/article/:id" exact>
          <div>
            <Article />
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
