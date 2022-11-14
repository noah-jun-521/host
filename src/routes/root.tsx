import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <a href="cra">Create-React-App</a>
            </li>
            <li>
              <Link to="todo-react">Todo Application (React)</Link>
            </li>
            <li>
              <Link to="todo-vue3">Todo Application (Vue 3)</Link>
            </li>
            <li>
              <Link to="old-react">Old React - v16.4.0</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
