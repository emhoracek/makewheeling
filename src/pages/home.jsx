import * as React from "react";
import MakeWheelingWhat from "../components/make-wheeling-what.jsx";
import ContactForm from "../components/contact-form.jsx";

export default function Home() {
  return (
    <>
      <MakeWheelingWhat />

      <div class="game-day">
        <h2>Tabletop Game Day</h2>

        <h3>When: May 25 @ 3pm</h3>
        <h3>Where: Elm Grove Civics</h3>

        <p>Play your favorites and discover new games that you’ll love, including classic, cooperative, strategy, and roleplaying games.</p>

        <p>Please RSVP below: </p>

          <div class="desktop-form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfId2IKWfPkcff8aXFlMoGuOEykFP15fHTZiMc8S7IjhV3Bzw/viewform?embedded=true" width="640" height="2050" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
          <div class="mobile-form">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfId2IKWfPkcff8aXFlMoGuOEykFP15fHTZiMc8S7IjhV3Bzw/viewform?embedded=true" width="320" height="3000" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
      </div>
    </>
  );
}
