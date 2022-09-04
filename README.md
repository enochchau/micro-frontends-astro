# Micro Frontends with Astro

This is a demo of a SolidJS and React mixed micro-frontend application using Astro as the base MPA framework.
You can view a live demo at https://ec965.github.io/micro-frontends-astro.

The routes behind `/react` are managed by the React app while the `/solid` routes are managed by the SolidJS app.

## Astro Setup

### Using Multiple Frameworks

When using multiple frameworks with Astro, you must explicitly define which framework to use for each component.
For example, to tell both TypeScript and Astro that the component is a React component, you should put the following at the top of the file.

```javascript
/** @jsxImportSource react */
import React from "react";
```

For SolidJS, this would look like:

```javascript
/** @jsxImportSource solid-js */
import "solid-js";
```

### Configure Dynamic Routing

In order to get Astro to always bring us to our framework's application Root, we must configure our routing tree using a spread.

```
pages
| - solid
|     | - [...route].astro
| - react
      | - [...route].astro
```

Then at the top of the `[...route].astro` file, define all the routes of the App.

```javascript
export function getStaticPaths() {
  // we need to define all the possible solid routes so astro knows to redirect here
  // our app has 2 routes, the root page and the page1 page
  return [{ params: { route: undefined } }, { params: { route: "page1" } }];
}
```

See the [Astro docs on Dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) for more information.

### Skipping SSR

Client side routing doesn't work with SSR.

We can skip Astro's SSR by using the [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly) 
directive on our application root components.

```javascript
<Layout title="React">
  <h1>Astro title</h1>
  <React client:only="react" />
</Layout>
```

## React

The component in [`/src/component/React.tsx`](/src/component/React.tsx) is the React Application.
Routing is handled by [react-router-dom](https://github.com/remix-run/react-router).
Navigation between React routes must use the `<Link/>` component from react-router.
Navigation to the Solid App routes or the default Astro routes can be done using the regular `<a/>` anchor tag.

## Solid

The component in [`/src/component/Solid.tsx`](/src/component/Solid.tsx) is the React Application.
Routing is handled by [@solidjs/router](https://github.com/solidjs/solid-router).
Navigation between Solid routes can be done with either the provided `<Link/>` component or with `<a/>` anchor tags.
In order to navigate from the Solid App to the React App or Astro routes, we must use some custom JS
to force @solidjs/router to relinquish control of browser routing.

```javascript
// need to do some JS hacks to get solid router to hand routing back to the browser
function GoToReact() {
  return <a href="javascript:window.location.href='/react'">Go To React</a>;
}
```

---

https://enochchau.com/blog/2022/micro-frontends-with-astro/
