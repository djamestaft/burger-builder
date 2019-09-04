import React from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends React.Component {
    state = {
        showSidedrawer: true
    }
    
    sideDrawerCloseHandler = () => {
        this.setState({showSidedrawer: false});
    }

    sideDrawerTogglehandler = () => {
        this.setState((prevState) => {
            return  {showSidedrawer: !prevState.showSidedrawer};
        });
    } 

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler}/>
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSidedrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;