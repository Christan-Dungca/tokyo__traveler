import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Admin from "./containers/Admin/Admin";
import Article from "./containers/Article/Article";
import Author from "./containers/Author/Author";
import AllArticlesPage from "./components/AllArticlesPage/AllArticlesPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Home from "./containers/Home/Home";
import Login from "./containers/Authentication/Login";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
import Signup from "./containers/Authentication/Signup";
import Transition from "./containers/Transition/Transition";

import AuthContext from "./context/auth-context";
import AnimationContext from "./context/animation-context";
import useToken from "./hooks/useToken";
import styles from "./App.scss";

function App() {
  const getUser = () => {
    let userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      userFromStorage = JSON.parse(userFromStorage);
    }
    console.log(userFromStorage);
    return userFromStorage;
  };

  const [showTransition, setShowTransition] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(getUser());
  const { token, setToken, removeToken } = useToken();

  const loginUser = (userData = "") => {
    if (!user) {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    }
  };

  const handleAnimation = () => {
    setShowTransition(false);
    setIsAnimationComplete(true);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  console.log({ user });

  return (
    <div className={styles.App}>
      <AnimationContext.Provider value={{ isAnimationComplete }}>
        <AuthContext.Provider
          value={{
            token,
            user,
            logout: removeToken,
            login: loginUser,
          }}
        >
          {showMenu && <Menu handleShowMenu={handleToggleMenu} />}
          {isAnimationComplete && (
            <Navigation handleShowMenu={handleToggleMenu} />
          )}
          <Switch>
            <Route path="/" exact>
              {showTransition && (
                <Transition handleAnimation={handleAnimation} />
              )}
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
      </AnimationContext.Provider>
    </div>
  );
}

export default App;
