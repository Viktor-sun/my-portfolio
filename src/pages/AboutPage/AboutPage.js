import React from 'react';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Background from '../../components/Background';
import SectionTitle from '../../components/SectionTitle';
import styles from './AboutPage.module.css';
import photo from '../../assets/images/photo2.jpg';
import cv from '../../assets/pdf/Tsolka_Viktor_FS25.pdf';

export default function AboutPage() {
  return (
    <>
      <Background height="300px">
        <SectionTitle title="Some About Me" />
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

          <Button
            className={styles.button}
            variant="contained"
            color="secondary"
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GetAppIcon />}
          >
            download CV
          </Button>
        </div>
      </section>
      <Background height="70px" />
    </>
  );
}
