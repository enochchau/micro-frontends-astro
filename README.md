# Micro Frontends with Astro

This is a demo of a SolidJS and React mixed micro-frontend application.

The routes behind `/react` are managed by the React app while the `/solid` routes are managed by the SolidJS app.

## React

The component in [`/src/component/React.tsx`](/src/component/React.tsx) is the React Application.
Routing is handled by react-router-dom.
Navigation between React routes must use the `<Link/>` component from react-router.
Navigation to the Solid App routes or the default Astro routes can be done using the regular `<a/>` anchor tag.

## Solid

The component in [`/src/component/Solid.tsx`](/src/component/Solid.tsx) is the React Application.
Routing is handled by @solidjs/router.
Navigation between Solid routes can be done with either the provided `<Link/>` component or with `<a/>` anchor tags.
In order to navigate from the Solid App to the React App or Astro routes, we must use some custom JS
to force @solidjs/router to relinquish control of browser routing.

```javascript
// need to do some JS hacks to get solid router to hand routing back to the browser
function GoToReact() {
  return <a href="javascript:window.location.href='/react'">Go To React</a>;
}
```
