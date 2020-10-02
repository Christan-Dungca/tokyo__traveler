import React, { Fragment } from 'react';
import styles from './Layout.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Menu from '../../components/Menu/Menu';

// class Layout extends Component {

//     state = {
//         showNav: false
//     }

//     // NAVIGATION STATE //
//     toggleNavHandler = () => { 
//         console.log(this.state.showNav);
//         this.setState( ( prevState ) => {
//             return { showNav: !prevState.showNav };
//         });
//     } //pass this method to Navigation component via props

//     render () {
//         return (
//             <Fragment>
//                 {this.state.showNav && <Menu />}
//                 {/* Navigation will always be shown */}
//                 <Navigation  className={styles.Navigation} toggleNavHandler={this.toggleNavHandler} showNav={this.state.showNav}/>
//                 {/* This will change according to App Component */}
//                 <main>
//                     {this.props.children}
//                 </main>
//                 {/* Footer will always be shown */}
//                 <h1> Footer Placeholder from Layout </h1>
//             </Fragment>
//         )
//     }
// }

const Layout = (props) => {

    const [showNav, toggleNav] = React.useState(false);

    const toggleNavHandler = () => {
        const toggledNav = !showNav;
        console.log(toggledNav);
        toggleNav(toggledNav)
    }

    return (
        <Fragment>
                {showNav && <Menu />}
                {/* Navigation will always be shown */}
                <Navigation  className={styles.Navigation} toggleNavHandler={() => toggleNavHandler()} showNav={showNav}/>
                {/* This will change according to App Component */}
                <main>
                    {props.children}
                </main>
                {/* Footer will always be shown */}
                <h1> Footer Placeholder from Layout </h1>
            </Fragment>
    )

}



export default Layout;