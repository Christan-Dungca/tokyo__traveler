import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Admin from "./containers/Admin/Admin";
import Article from "./containers/Article/Article";
import Author from "./containers/Author/Author";
import AllArticlesPage from "./components/AllArticlesPage/AllArticlesPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Home from "./containers/Home/Home";
import Login from "./containers/Authentication/Login";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./containers/Authentication/Signup";
import Transition from "./containers/Transition/Transition";

import AuthContext from "./context/auth-context";
import useToken from "./hooks/useToken";
import "./App.scss";

function App() {
  const [isAnimating, setIsAnimating] = useState(true);
  const { token, setToken, removeToken } = useToken();

  const handleAnimation = () => {
    setIsAnimating(false);
  }

  return (
    <>
      <AuthContext.Provider value={{ token: token, logout: removeToken }}>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact>
            {isAnimating && <Transition handleAnimation={handleAnimation} />}
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
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </AuthContext.Provider>
    </>
  );
}

export default App;
