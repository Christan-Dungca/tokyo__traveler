import React, { Component, Fragment } from 'react';



class Layout extends Component {

    render () {
        return (
            <Fragment>
                {/* Navigation will always be shown */}
                <h1>Navigation Placeholder from Layout</h1>
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