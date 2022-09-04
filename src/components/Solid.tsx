/** @jsxImportSource solid-js */
import "solid-js";

import { Router, useRoutes, Link } from "@solidjs/router";
import { routeBase } from "../util/routing";

const rootRoute = routeBase + "/solid";

const routes = [
  { path: rootRoute, element: Root },
  { path: rootRoute + "/page1", element: Page1 },
];

function NativeAnchor(props: any) {
  return (
    <a href={`javascript:window.location.href='${props.href}'`}>
      {props.children}
    </a>
  );
}

// need to do some JS hacks to get solid router
// to hand routing back to the browser
function GoToReact() {
  return <NativeAnchor href={`${routeBase}/react`}>Go To React</NativeAnchor>
}

function GoToHome() {
  return <NativeAnchor href={routeBase + '/'}>Go To Home</NativeAnchor>
}

export default function App() {
  const Routes = useRoutes(routes);
  return (
    <Router>
      <h1>The rest of this page is rendered by SolidJS</h1>
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
          <Link href={routes[1].path}>Got to Page 1</Link>
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
          <Link href={routes[0].path}>Go To Root</Link>
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
