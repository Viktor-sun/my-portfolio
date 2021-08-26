import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, PersonRounded, BookRounded, Contacts } from '@material-ui/icons';
import routes from '../../routes';

const useStyles = makeStyles({
  button: {
    '& span, ': {
      fontFamily: "'Caveat', sans-serif",
      fontSize: '1.2rem',
    },
  },
});

export default function MobileNavigation({ onCloseDrawer }) {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="main nav folders">
      <ListItem
        button
        onClick={onCloseDrawer}
        component={Link}
        to={routes.home}
        className={classes.button}
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
        className={classes.button}
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
        className={classes.button}
      >
        <ListItemIcon>
          <BookRounded />
        </ListItemIcon>
        <ListItemText primary="Portfolio" />
      </ListItem>

      <ListItem
        button
        onClick={onCloseDrawer}
        component={Link}
        to={routes.contacts}
        className={classes.button}
      >
        <ListItemIcon>
          <Contacts />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </List>
  );
}
