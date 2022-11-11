import React from 'react';

const Remote = React.lazy(() => import("remote_cra/App"));

const CRA = () => {
  return (
    <React.Suspense fallback="Loading. . .">
      <Remote />
    </React.Suspense>
  );
};

export default CRA;
