import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Home, PersonRounded, BookRounded } from '@material-ui/icons';

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
      >
        Home
      </Button>
      <Button
        className={classes.margin}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<PersonRounded />}
      >
        About me
      </Button>
      <Button
        className={classes.margin}
        variant="outlined"
        color="inherit"
        size="large"
        startIcon={<BookRounded />}
      >
        Portfolio
      </Button>
    </>
  );
}
