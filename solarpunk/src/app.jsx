import React, { useState, useEffect } from "react";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import NavRouter from "./components/nav-router.jsx";
import Zine from "./pages/home.jsx";

// The component that adds our Meta tags to the page
import Seo from './components/seo.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <div>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <Zine />
        </div>
      </main>
      {/* Footer links to Home and About, Link elements matched in router.jsx */}
      <footer className="footer">
        <NavRouter />
      </footer>
    </div>
  );
}
