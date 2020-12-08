import React, { Fragment } from "react";
import styles from "./Layout.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Menu from "../../components/Menu/Menu";

const Layout = (props) => {
  const [showNav, toggleNav] = React.useState(false);

  const toggleNavHandler = () => {
    const toggledNav = !showNav;
    // console.log(toggledNav);
    toggleNav(toggledNav);
  };

  return (
    <div className={styles.Layout}>
      {showNav && <Menu />}
      {/* Navigation will always be shown */}
      <Navigation
        className={styles.Navigation}
        toggleNavHandler={() => toggleNavHandler()}
        showNav={showNav}
      />
      {/* This will change according to App Component */}
      <main className={styles.main}>{props.children}</main>
      {/* Footer will always be shown */}
      <h1> Footer Placeholder from Layout </h1>
    </div>
  );
};

export default Layout;
