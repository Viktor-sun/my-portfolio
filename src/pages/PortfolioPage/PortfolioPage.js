import React from 'react';
import { Helmet } from 'react-helmet';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  AccountBalanceWallet,
  Movie,
  Language,
  Phone,
  Theaters,
  Image,
} from '@material-ui/icons';
import { Typography, Button } from '@material-ui/core';
import Background from '../../components/Background';
import SectionTitle from '../../components/SectionTitle';
import s from './Portfolio.module.css';
import screen1 from '../../assets/images/projects/project1.jpg';
import screen2 from '../../assets/images/projects/project2.jpg';
import screen3 from '../../assets/images/projects/project3.jpg';
import ownScreen1 from '../../assets/images/projects/own-project1.jpg';
import ownScreen2 from '../../assets/images/projects/own-project2.jpg';
import ownScreen3 from '../../assets/images/projects/own-project3.jpg';

export default function PortfolioPage() {
  return (
    <div className={s.page}>
      <Helmet>
        <title>Portfolio | Victor's Portfolio</title>
        <meta
          property="og:description"
          content="If you want, you can see me portfolio."
        />
        <meta
          property="og:url"
          content="https://vs-portfolio.netlify.app/portfolio"
        />
      </Helmet>
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

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#fff',
              borderTop: '4px solid rgb(33, 150, 243)',
              boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Language />}
          >
            <ul className={s.list}>
              <li className={s.item}>HTML</li>
              <li className={s.item}>SASS</li>
              <li className={s.item}>Parcel</li>
            </ul>
            <a
              href="https://viktor-sun.github.io/Hellen-English/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.img}
                src={screen3}
                alt="project hellen-english"
              />
            </a>

            <h4 className="vertical-timeline-element-title">Hellen-English</h4>
            <p className={s.description}>
              Responsive web page layout for English school.
            </p>
            <Button
              href="https://viktor-sun.github.io/Hellen-English/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/Hellen-English"
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

        <Typography variant="h3" className={s.title}>
          My Projects
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
            icon={<Phone />}
          >
            <ul className={s.list}>
              <li className={s.item}>ReactJS</li>
              <li className={s.item}>React-Redux</li>
            </ul>
            <a
              href="https://vs-phonebook.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.img} src={ownScreen1} alt="phonebook" />
            </a>

            <h4 className="vertical-timeline-element-title">Phonebook</h4>
            <p className={s.description}>
              Phonebook application with the ability toregisterusers and work
              with private collections ofcontacts.
            </p>
            <Button
              href="https://vs-phonebook.netlify.app/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/goit-react-hw-08-phonebook"
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
            icon={<Theaters />}
          >
            <ul className={s.list}>
              <li className={s.item}>ReactJS</li>
              <li className={s.item}>React-Router-Dom</li>
            </ul>
            <a
              href="https://vs-goit-react-hw-04-movies.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.img} src={ownScreen2} alt="project movies" />
            </a>

            <h4 className="vertical-timeline-element-title">Movies</h4>
            <p className={s.description}>
              App for quickly finding popular and not very films.
            </p>
            <Button
              href="https://vs-goit-react-hw-04-movies.netlify.app/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/goit-react-hw-04-movies"
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
              borderTop: '4px solid rgb(33, 150, 243)',
              boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
            }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<Image />}
          >
            <ul className={s.list}>
              <li className={s.item}>VanillaJS</li>
              <li className={s.item}>Handlebars</li>
              <li className={s.item}>Basiclightbox</li>
            </ul>
            <a
              href="https://viktor-sun.github.io/goit-js-hw-13-image-finder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={s.img} src={ownScreen3} alt="project finder" />
            </a>

            <h4 className="vertical-timeline-element-title">Image Finder</h4>
            <p className={s.description}>
              Image finder will help you find the most desirablepictures.
            </p>
            <Button
              href="https://viktor-sun.github.io/goit-js-hw-13-image-finder/"
              className={s.button}
              variant="contained"
              color="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              view demo
            </Button>
            <Button
              href="https://github.com/Viktor-sun/goit-js-hw-13-image-finder"
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
