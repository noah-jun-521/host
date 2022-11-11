import React from 'react';

import { mockData } from '../mockTodos';

const App = React.lazy(() => import("remote_react_todo/App"));

const Todo = () => {
  return (
    <React.Suspense fallback="Loading. . .">
      <App list={mockData} />
    </React.Suspense>
  );
};

export default Todo;
