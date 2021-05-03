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
import useToken from "./hooks/useAuth";
import styles from "./App.scss";
import Footer from "./components/Footer/Footer";

function App() {
  const [showTransition, setShowTransition] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuColor, setMenuColor] = useState({ left: "#fff", right: "#fff" });

  const { login, logout, token, user } = useToken();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAnimation = () => {
    setShowTransition(false);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const setMenuColorWhite = (colorObj = { left: "#fff", right: "#fff" }) => {
    setMenuColor(colorObj);
  };

  const setMenuColorBlack = (colorObj = { left: "#000", right: "#000" }) => {
    setMenuColor(colorObj);
  };

  return (
    <div className={styles.App}>
      <AnimationContext.Provider
        value={{ isAnimationComplete: !showTransition }}
      >
        <AuthContext.Provider
          value={{
            token,
            user,
            logout,
            login,
          }}
        >
          {showMenu && <Menu handleShowMenu={handleToggleMenu} />}
          {/* {showTransition && ( */}
          {/* )} */}
          <Switch>
            <Route path="/" exact>
              {showTransition && (
                <Transition handleAnimation={handleAnimation} />
              )}
              <Navigation
                handleShowMenu={handleToggleMenu}
                menuColor={menuColor}
              />
              <Home />
              <Footer />
            </Route>
            <Route path="/article/:id" exact>
              <Navigation
                handleShowMenu={handleToggleMenu}
                menuColor={{ left: "#000", right: "#000" }}
              />
              <Article setMenuColorBlack={setMenuColorBlack} />
              <Footer />
            </Route>
            <Route path="/user/:id" exact>
              <Author />
              <Footer />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
              <Footer />
            </Route>
            <Route path="/all-articles" exact>
              <Navigation
                handleShowMenu={handleToggleMenu}
                menuColor={{ left: "#000", right: "#000" }}
              />
              <AllArticlesPage />
              <Footer />
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
