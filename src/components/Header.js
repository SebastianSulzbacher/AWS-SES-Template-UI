import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 220;

const styles = theme => ({
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        paddingLeft: `20px`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
})

class Header extends Component {
    
    render() {
        const { classes } = this.props
        return (  
            
            <Toolbar className={classes.appBarShift}>
                <Typography variant="title" color="inherit" >
                    AWS SES Template Manager
                </Typography>
            </Toolbar>

        ) 
    }

}

export default withStyles(styles)(Header);