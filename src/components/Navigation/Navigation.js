import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, PersonRounded, BookRounded, Contacts } from '@material-ui/icons';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontFamily: "'Caveat', sans-serif",
    fontSize: '1.2rem',
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<Home />}
        component={Link}
        to={routes.home}
      >
        Home
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<PersonRounded />}
        component={Link}
        to={routes.about}
      >
        About me
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<BookRounded />}
        component={Link}
        to={routes.portfolio}
      >
        Portfolio
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<Contacts />}
        component={Link}
        to={routes.contacts}
      >
        Contacts
      </Button>
    </>
  );
}
