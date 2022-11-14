import React from 'react';

const App = React.lazy(() => import("remote_old_react/App"));

export default () => (
  <React.Suspense fallback="Loading. . .">
    <App basename="/old-react" />
  </React.Suspense>
);
