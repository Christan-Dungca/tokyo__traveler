import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

class Layout extends Component {

    render () {
        return (
            <Aux>
                {/* Navigation will always be shown */}
                <h1>Navigation Placeholder from Layout</h1>
                {/* This will change according to App Component */}
                <main>
                    {this.props.children}
                </main>
                {/* Footer will always be shown */}
                <h1> Footer Placeholder from Layout </h1>
            </Aux>
        )
    }

}

export default Layout;