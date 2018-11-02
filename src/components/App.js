import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'
import Header from "./Header"
import Sidebar from './Sidebar/Sidebar';
import Editor from './Editor';
import Settings from './Settings';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
})

class App extends Component {
  render() {
    const { classes } = this.props;


    return (
      <Router>
        <>
            
              <Header />
              <Sidebar />
                <div className={classes.appBarShift}>
                  <Route path="/edit/:templateId" exact component={Editor} />
                  <Route path="/settings" exact component={Settings} />
                </div>
        </>
      </Router>
    );
  }

}

export default withStyles(styles)(App);
