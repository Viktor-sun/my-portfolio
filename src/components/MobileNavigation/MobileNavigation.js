import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Home, PersonRounded, BookRounded } from '@material-ui/icons';
import routes from '../../routes';

export default function MobileNavigation({ onCloseDrawer }) {
  return (
    <List component="nav" aria-label="main nav folders">
      <ListItem
        button
        onClick={onCloseDrawer}
        component={Link}
        to={routes.home}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>

      <ListItem
        button
        onClick={onCloseDrawer}
        component={Link}
        to={routes.about}
      >
        <ListItemIcon>
          <PersonRounded />
        </ListItemIcon>
        <ListItemText primary="About me" />
      </ListItem>

      <ListItem
        button
        onClick={onCloseDrawer}
        component={Link}
        to={routes.portfolio}
      >
        <ListItemIcon>
          <BookRounded />
        </ListItemIcon>
        <ListItemText primary="Portfolio" />
      </ListItem>
    </List>
  );
}
