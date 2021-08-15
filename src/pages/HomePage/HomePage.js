import React from 'react';
import { LinkedIn, GitHub, Email, Instagram } from '@material-ui/icons';
import styles from './HomePage.module.css';
import Background from '../../components/Background';

export default function HomePage() {
  return (
    <Background>
      <section className={styles.section}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&w=1000&q=80"
            alt=""
            width="250"
          />
        </div>
        <h1 className={styles.title}>Viktor Tsolka</h1>
        <ul className={styles.socialsNetwork}>
          <li>
            <LinkedIn />
          </li>
          <li>
            <GitHub />
          </li>
          <li>
            <Email />
          </li>
          <li>
            <Instagram />
          </li>
          <li></li>
        </ul>
      </section>
    </Background>
  );
}
