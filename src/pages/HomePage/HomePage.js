import React from 'react';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import {
  LinkedIn,
  GitHub,
  Email,
  Instagram,
  Telegram,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import styles from './HomePage.module.css';
import Background from '../../components/Background';
import photo from '../../assets/images/photo.png';

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
          src={photo}
          alt="my portrait"
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
              title="LinkedIn"
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
              title="GitHub"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://github.com/Viktor-sun"
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
              title="viktortsolka4@gmail.com"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="mailto:viktortsolka4@gmail.com"
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
              title="Instagram"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://www.instagram.com/viteecheck/"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Instagram className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              title="Telegram"
              interactive
              enterTouchDelay={0}
              arrow
              classes={classes}
            >
              <IconButton
                href="https://t.me/viktor_tsk"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Telegram className={styles.icon} />
              </IconButton>
            </Tooltip>
          </li>
        </ul>
      </section>
    </Background>
  );
}
