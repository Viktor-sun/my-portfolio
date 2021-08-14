import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, RecentActors } from '@material-ui/icons';

export default function MobileNavigation({ onCloseDrawer }) {
  return (
    <List component="nav" aria-label="main nav folders">
      {/* <NavLink
        exact
        to={routes.home}
        className="Navlink"
        activeClassName="Navlink-active"
        onClick={onCloseDrawer}
      > */}
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      {/* </NavLink> */}
      {/* <NavLink
        to={routes.contacts}
        className="Navlink"
        activeClassName="Navlink-active"
        onClick={onCloseDrawer}
      > */}
      <ListItem button>
        <ListItemIcon>
          <RecentActors />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
      {/* </NavLink> */}
    </List>
  );
}
