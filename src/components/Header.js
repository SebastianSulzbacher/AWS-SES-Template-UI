import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 200;

const styles = theme => ({
    appBarShift: {
        marginLeft: `300px`,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
})

class Header extends Component {

    render() {
        return (  
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        AWS SES Template Manager
                    </Typography>
                </Toolbar>
            </AppBar>
        ) 
    }

}

export default withStyles(styles)(Header);