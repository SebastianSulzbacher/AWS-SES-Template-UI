import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Menu from './Menu';

const styles = theme => ({
    drawerPaper: {
        position:"fixed"
    },

    toolbar: theme.mixins.toolbar
})

class Sidebar extends Component {

    render() {
        
        const { classes } = this.props
        
        return (  
            <>
                <Drawer variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                          }} >
                    <div className="toolbar">
                        <Menu />
                    </div>
                    
                </Drawer>
            </>
        ) 
    }

}
export default  withStyles(styles)(Sidebar);