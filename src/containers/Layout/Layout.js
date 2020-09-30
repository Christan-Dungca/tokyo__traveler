import React, { Component, Fragment } from 'react';
import styles from './Layout.module.scss';
import Navigation from '../../components/Navigation/Navigation';

class Layout extends Component {

    state = {
        showNav: false
    }

    // NAVIGATION STATE //
    toggleNavHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    } //pass this method to Navigation component via props

    render () {
        return (
            <Fragment>
                {/* Navigation will always be shown */}
                <Navigation  className={styles.Navigation} />
                {/* This will change according to App Component */}
                <main>
                    {this.props.children}
                </main>
                {/* Footer will always be shown */}
                <h1> Footer Placeholder from Layout </h1>
            </Fragment>
        )
    }

}

export default Layout;