/** @jsxImportSource react */
import React from 'react';
import { useRoutes, Link, BrowserRouter } from "react-router-dom";
import { routeBase } from '../util/routing';

let rootRoute = routeBase + "/react";

export const routes = [
  {
    path: rootRoute,
    element: <Root />,
  },
  { path: rootRoute + "/page1", element: <Page1 /> },
];

// this works fine with react router
function GoToSolid() {
  return <a href={`${routeBase}/solid`}>Go To Solid</a>;
}

function GoToHome() {
  return <a href={routeBase + '/'}>Go To Home</a>
}

export default function App() {
  return (
    <BrowserRouter>
      <h1>The rest of this page is rendered by React</h1>
      <Routes />
    </BrowserRouter>
  );
}

function Routes() {
  let element = useRoutes(routes);
  return element;
}

function Root() {
  return (
    <div>
      <h1>Root Page</h1>
      <ul>
        <li>
          <Link to={routes[1].path}>Go to Page 1</Link>
        </li>
        <li>
          <GoToSolid />
        </li>
        <li>
          <GoToHome />
        </li>
      </ul>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1>Page 1</h1>
      <ul>
        <li>
          <Link to={routes[0].path}>Got to Root</Link>
        </li>
        <li>
          <GoToSolid />
        </li>
        <li>
          <GoToHome />
        </li>
      </ul>
    </div>
  );
}
