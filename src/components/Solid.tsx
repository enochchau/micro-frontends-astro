/** @jsxImportSource solid-js */
import "solid-js";

import { Router, useRoutes, Link } from "@solidjs/router";

const rootRoute = "solid";

const routes = [
  { path: rootRoute, element: Root },
  { path: rootRoute + "/page1", element: Page1 },
];

// need to do some JS hacks to get solid router
// to hand routing back to the browser
function GoToReact() {
  return <a href="javascript:window.location.href='/react'">Go To React</a>;
}

function GoToHome() {
  return <a href="javascript:window.location.href='/'">Go To Home</a>;
}

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <h1>Solid title</h1>
      <Routes />
    </Router>
  );
}

function Root() {
  return (
    <div>
      <h1>Root Page</h1>
      <ul>
        <li>
          <Link href="page1">Got to Page 1</Link>
        </li>
        <li>
          <GoToReact />
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
          <Link href={"/" + rootRoute}>Go To Root</Link>
        </li>
        <li>
          <GoToReact />
        </li>
        <li>
          <GoToHome />
        </li>
      </ul>
    </div>
  );
}
