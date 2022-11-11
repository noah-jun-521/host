import React from 'react';

const App = React.lazy(() => import("remote_cra/App"));

export default () => (
  <React.Suspense fallback="Loading. . .">
    <App />
  </React.Suspense>
);
