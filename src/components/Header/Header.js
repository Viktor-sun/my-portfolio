import React from 'react';
import classnames from 'classnames';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  makeStyles,
  useScrollTrigger,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { format } from 'date-fns';
import { useMediaQuery } from 'react-responsive';
import Navigation from '../Navigation';
import MobileNavigation from '../MobileNavigation';

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1,
      transition: 'all 250ms',
      backgroundColor: '#1b1b1b',
    },
    rootSplash: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    date: {
      flexGrow: 1,
      fontFamily: "'Caveat', sans-serif",
      fontSize: '1.2rem',
    },
    '@media screen and (min-width: 530px)': {
      date: { fontSize: '2rem' },
    },
  };
});

export default function Header() {
  const classes = useStyles();
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isTabletOrMobile = useMediaQuery({ maxWidth: 959 });

  return (
    <AppBar
      position="fixed"
      className={classnames({
        [classes.root]: true,
        [classes.rootSplash]: !trigger,
      })}
    >
      <Toolbar>
        <Typography className={classes.date}>
          Today is the {format(new Date(), 'do MMMM Y')}
        </Typography>

        {isTabletOrMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Navigation />
        )}
      </Toolbar>
      <Drawer anchor="right" open={Boolean(anchorEl)} onClose={handleClose}>
        <MobileNavigation onCloseDrawer={handleClose} />
      </Drawer>
    </AppBar>
  );
}
