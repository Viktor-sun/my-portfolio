import React from 'react';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { LinkedIn, GitHub, Email, Instagram } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import styles from './HomePage.module.css';
import Background from '../../components/Background';

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: 20,
    fontFamily: "'Caveat', sans-serif",
  },
}));

export default function HomePage() {
  const classes = useStylesBootstrap();

  return (
    <Background>
      <section className={styles.section}>
        <img
          className={styles.photo}
          src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&w=1000&q=80"
          alt=""
          width="250"
        />
        <Typography variant="h1" className={styles.title}>
          Viktor Tsolka
        </Typography>
        <Typography variant="h4" className={styles.subTitle}>
          Front-End Developer
        </Typography>
        <ul className={styles.socialsNetwork}>
          <li>
            <Tooltip
              title="linkedin"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://www.linkedin.com/in/viktor-tsolka/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedIn className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="linkedin"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://www.linkedin.com/in/viktor-tsolka/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <GitHub className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="linkedin"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://www.linkedin.com/in/viktor-tsolka/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Email className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="linkedin"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://www.linkedin.com/in/viktor-tsolka/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Instagram className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
          <li></li>
        </ul>
      </section>
    </Background>
  );
}
