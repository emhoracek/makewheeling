import * as React from "react";
import { Router, Link } from "wouter";

/**
* The router is imported in app.jsx
*
* Our site just has two routes in it–Home and About
* Each one is defined as a component in /pages
* We use Switch to only render one route at a time https://github.com/molefrog/wouter#switch-
*/

const currentLocation = () => window.location.hash.replace(/^#/, "") || "/";

const navigate = (to) => {
  window.location.hash = to;
};

const useHashLocation = () => {
  // `useSyncExternalStore` is available in React 18, or you can use a shim for older versions
  const location = React.useSyncExternalStore(
    // first argument is a value subscriber: it gives us a callback that we should call
    // whenever the value is changed
    (onChange) => {
      window.addEventListener("hashchange", onChange);
      return () => window.removeEventListener("hashchange", onChange);
    },

    // the second argument is function to get the current value
    () => currentLocation()
  );

  return [location, navigate];
};

export default () => (
        <div className="links">
          <a href="/">Home</a>
          <span className="divider">|</span>
          <a href="https://makewheeling.com/solarpunk">Solarpunk Zine</a>
        </div>
);
