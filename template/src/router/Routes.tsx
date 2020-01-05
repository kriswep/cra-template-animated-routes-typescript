import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Loading from '../components/Loading';
import './Routes.css';

// Lazy load components
const LoadableHome = React.lazy(() =>
  import(/* webpackChunkName:"home" */ '../pages/Home'),
);
const Home: React.FC = () => <LoadableHome />;

const LoadableAbout = React.lazy(() =>
  import(/* webpackChunkName:"about" */ '../pages/About'),
);
const About: React.FC = () => <LoadableAbout />;

// animated route configuration
// if you know how to type this, please let me know here: https://github.com/kriswep/cra-template-animated-routes-typescript/issues
const Routes: any = () => {
  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  });
  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props} className="Route-animation">
      <React.Suspense fallback={<Loading />}>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </React.Suspense>
    </animated.div>
  ));
};

export default Routes;
