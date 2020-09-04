import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store, { history } from '../redux/store';

const Predict = React.lazy(() => import('../screens/predict'));
const Result = React.lazy(() => import('../screens/result'));
const History = React.lazy(() => import('../screens/history'));

const Root = React.lazy(() => import('../screens/root'));

const publicPaths = [
  { exact: true, path: '/predict', component: Predict },
  { exact: true, path: '/result/:name', component: Result },
  { exact: true, path: '/history', component: History }
];

const publicRoutes = publicPaths.map(({ path, ...props }) => (
  <Route key={path} path={path} {...props} />
));

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Suspense fallback={<div />}>
          <Root>{publicRoutes}</Root>
        </Suspense>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
