import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import Divider from '@material-ui/core/Divider';

class Menu extends Component {
    render() {
      const { classes } = this.props;  
      return (
          <>
          <MenuList>
            <MenuItem >
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Create Template" />
            </MenuItem>
            <MenuItem >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </MenuItem>                    
          </MenuList>
          <Divider/>
          <List subheader={<ListSubheader>My Templates</ListSubheader>}>
            <ListItem>
              <ListItemText>E4C-Testtemplate</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>E4C-Testtemplate</ListItemText>
            </ListItem>
          </List>
          </>
        )
    }
}

export default  Menu;