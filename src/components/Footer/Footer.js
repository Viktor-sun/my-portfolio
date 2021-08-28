import React from 'react';
import { CssBaseline, Typography, Link, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    padding: theme.spacing(1, 2),
    backgroundColor: 'trasparent',
    color: '#FFFFFF',
    boxShadow: '-1px -7px 8px 0px rgba(34, 60, 80, 0.2)',
  },
  typography: {
    fontFamily: "'Caveat', sans-serif",
    fontSize: '1.1rem',
  },
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Typography variant="body2" align="center" className={classes.typography}>
      <Link
        color="inherit"
        href="https://github.com/Viktor-sun/my-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Website Source Code
      </Link>{' '}
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <CssBaseline />
        <Typography
          variant="body1"
          align="center"
          className={classes.typography}
        >
          Development by Viktor Tsolka
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
