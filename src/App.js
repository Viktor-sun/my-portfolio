import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage.js' /* webpackChunkName: "home-page" */),
);

const AboutPage = lazy(() =>
  import('./pages/AboutPage/AboutPage.js' /* webpackChunkName: "about-page" */),
);

const PortfolioPage = lazy(() =>
  import(
    './pages/PortfolioPage/PortfolioPage.js' /* webpackChunkName: "portfolio-page" */
  ),
);

const ContactsPage = lazy(() =>
  import(
    './pages/ContactsPage/ContactsPage.js' /* webpackChunkName: "contacts-page" */
  ),
);

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={routes.home} exact>
            <HomePage />
          </Route>
          <Route path={routes.about} exact>
            <AboutPage />
          </Route>
          <Route path={routes.portfolio} exact>
            <PortfolioPage />
          </Route>
          <Route path={routes.contacts} exact>
            <ContactsPage />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}
