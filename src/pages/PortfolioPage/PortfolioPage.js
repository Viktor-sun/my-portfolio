import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AccountBalanceWallet, Movie } from '@material-ui/icons';
import { Typography, Button } from '@material-ui/core';
import Background from '../../components/Background';
import SectionTitle from '../../components/SectionTitle';
import s from './Portfolio.module.css';
import screen1 from '../../assets/images/projects/project1.jpg';
import screen2 from '../../assets/images/projects/project2.jpg';

export default function PortfolioPage() {
  return (
    <div className={s.page}>
      <Background height="300px">
        <SectionTitle title="Portfolio" />
      </Background>
      <section className={s.section}>
        <Typography variant="h3" className={s.title}>
          Team Projects
        </Typography>
        <VerticalTimeline className={s.timeLine}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '4px solid rgb(33, 150, 243)',
              boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<AccountBalanceWallet />}
          >
            <ul className={s.list}>
              <li className={s.item}>ReactJS</li>
              <li className={s.item}>NodeJS</li>
            </ul>
            <a
              href="https://vs-wallet-six-and-one.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.img}
                src={screen1}
                alt="project wallet-six-and-ones"
              />
            </a>

            <h4 className="vertical-timeline-element-title">
              Wallet-Six-And-Ones
            </h4>
            <p className={s.description}>
              There is never a lot of money.This application that will help you
              save your money.
            </p>
            <Button
              href="https://vs-wallet-six-and-one.netlify.app/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/wallet-six-and-one"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view source code
            </Button>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '4px solid #f50057',
              boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  #f50057' }}
            iconStyle={{ background: '#f50057', color: '#fff' }}
            icon={<Movie />}
          >
            <ul className={s.list}>
              <li className={s.item}>VanillaJS</li>
              <li className={s.item}>Gulp</li>
            </ul>
            <a
              href="https://viktor-sun.github.io/filmoteka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.img} src={screen2} alt="project filmoteka" />
            </a>

            <h4 className="vertical-timeline-element-title">Filmoteka</h4>
            <p className={s.description}>
              Are you want to know which movies are popular right now or find a
              coveted movie for two? This app will help you.
            </p>
            <Button
              href="https://viktor-sun.github.io/filmoteka/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/filmoteka"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view source code
            </Button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <Background height="70px" />
    </div>
  );
}
