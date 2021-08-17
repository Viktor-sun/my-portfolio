import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
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

export default function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      <Suspense fallback={<div>download...</div>}>
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
        </Switch>
      </Suspense>
      <Footer />
      {/* <span style={{ fontSize: '60px' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero tempora
        repellat repudiandae, reprehenderit cupiditate, id explicabo corrupti
        hic, at iusto fugit assumenda sit esse laudantium. Repellendus debitis
        rerum deleniti sunt soluta impedit possimus odio, quis hic beatae.
        Minima quod assumenda fuga architecto optio, cumque, ratione qui vel
        modi aut fugiat animi tenetur aperiam, amet dolores! Porro consectetur
        quasi fugiat accusamus incidunt, inventore, voluptatem quas eius
        consequatur adipisci deserunt maxime illum neque dolores praesentium ab!
        Harum inventore tempora iusto molestiae officiis maxime, eum nihil nisi
        fugit cupiditate quisquam voluptas ipsam ut in, quis deserunt
        reprehenderit soluta facilis nesciunt corrupti. Ea, reprehenderit!
      </span> */}
    </div>
  );
}
