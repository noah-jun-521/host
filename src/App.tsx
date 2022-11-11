import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Index from './routes';
import CRA from './routes/CRA';
import Root from './routes/root';
import TodoReact from './routes/TodoReact';
import TodoVue from './routes/TodoVue';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/todo-react",
        element: <TodoReact />,
      },
      {
        path: "/todo-vue3",
        element: <TodoVue />,
      },
      {
        path: "/cra",
        element: <CRA />,
      },
    ],
  },
]);

const Host = () => {
  return <RouterProvider router={router} />;
};

export default Host;
