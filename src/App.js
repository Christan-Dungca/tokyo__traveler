import React from "react";
import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./containers/Home/Home";
import Article from "./containers/Article/Article";
import Author from "./containers/Author/Author";
import AllArticlesPage from "./components/AllArticlesPage/AllArticlesPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Login from "./containers/Authentication/Login";
import Signup from "./containers/Authentication/Signup";

import useToken from "./hooks/useToken";
import AuthContext from "./context/auth-context";
import "./App.scss";

function App() {
  const { token, setToken } = useToken();
  console.log(`token: ${token}`);
  console.log(typeof token);

  return (
    <>
      {/* {token && <h1 style={{ color: "green" }}> token {token}</h1>} */}
      <AuthContext.Provider value={{ token: token }}>
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
            <Login setToken={setToken} />
          </Route>
          <Route path="/signup" exact>
            <Signup setToken={setToken} />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/all-articles" exact>
            <AllArticlesPage />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
