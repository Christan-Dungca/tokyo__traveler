import React, { Fragment } from "react";
import styles from "./Layout.module.scss";
import Navigation from "../../components/Navigation/Navigation";
import Menu from "../../components/Menu/Menu";
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const [showNav, toggleNav] = React.useState(false);

  const toggleNavHandler = () => {
    const toggledNav = !showNav;
    // console.log(toggledNav);
    toggleNav(toggledNav);
  };

  return (
    <div className={styles.Layout}>
      {showNav && <Menu toggleNavHandler={toggleNavHandler} />}
      {/* Navigation will always be shown */}
      <Navigation
        className={styles.Navigation}
        toggleNavHandler={() => toggleNavHandler()}
        showNav={showNav}
      />
      {/* This will change according to App Component */}
      <main className={styles.main}>{props.children}</main>
      {/* Footer will always be shown */}
      <Footer />
    </div>
  );
};

export default Layout;
