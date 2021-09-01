import React from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Background from '../../components/Background';
import SocialsNetworks from '../../components/SocialsNetworks';
import styles from './HomePage.module.css';
import photo from '../../assets/images/photo.png';

export default function HomePage() {
  return (
    <Background>
      <Helmet>
        <title>Home | Victor's Portfolio</title>
        <meta
          property="og:description"
          content="Hey, I'm Viktor from Ukraine. I love programming, ride a bike and learning new things!"
        />
        <meta property="og:url" content="https://vs-portfolio.netlify.app" />
      </Helmet>
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
        <SocialsNetworks />
      </section>
    </Background>
  );
}
