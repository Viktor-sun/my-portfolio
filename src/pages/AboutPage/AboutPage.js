import React from 'react';
import { Typography } from '@material-ui/core';
import Background from '../../components/Background';
import styles from './AboutPage.module.css';
import photo from '../../assets/images/photo2.jpg';

export default function AboutPage() {
  return (
    <>
      <Background height="300px">
        <Typography variant="h1" className={styles.title}>
          Some About Me
        </Typography>
      </Background>
      <section className={styles.section}>
        <img src={photo} alt="my portrait" className={styles.img} />

        <div className={styles.aboutWrapper}>
          <p className={styles.aboutTitle}>
            <strong>Hi!</strong>
          </p>

          <p className={styles.aboutDescription}>
            I'm Viktor located in Kharkiv, Ukraine. I really like to program,
            make complex tasks simple and to help people with this. I like
            solving design problems, create smart user interface. I want and
            love to develop, studies something new. When I don't click on the
            pixels, you can find me on the street while cycling or near the
            tennis table.
          </p>
        </div>
      </section>
      <Background height="70px" />
    </>
  );
}
