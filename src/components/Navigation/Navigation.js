import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, PersonRounded, BookRounded } from '@material-ui/icons';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <>
      <Button
        className={classes.margin}
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
        className={classes.margin}
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
        className={classes.margin}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<BookRounded />}
        component={Link}
        to={routes.portfolio}
      >
        Portfolio
      </Button>
    </>
  );
}
