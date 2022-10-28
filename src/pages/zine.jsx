import * as React from "react";
import { animated } from "react-spring";
import MakeWheelingWhat from "../components/make-wheeling-what.jsx";
import ContactForm from "../components/contact-form.jsx";

export default function Zine() {
  return (
    <>
      <h1>Rust &amp; Rebirth</h1>
      <h2>Visions of a Solarpunk Wheeling</h2>

      <div className="about">
        <h2>Call for Submissions</h2>
        <p>
          <cite>Rust &amp; Rebirth: Visions of a Solarpunk Wheeling</cite> is seeking submissions of art, short essays, and microfiction for a zine envisioning an ecologically sustainable future for Wheeling.
        </p>
      </div>

      <div className="why-solarpunk">
        <h2>Why solarpunk?</h2>
        <p>Sometimes it seems like the world around us is only getting worse all the time. The future looks like more of the same, or worse, a slow decay into desperation and disaster. It can be hard to even conceive of a way we could turn things around.</p>

        <p>Solarpunk is a visual and literary aesthetic that challenges us to stretch our imaginations and move beyond what seems practical or politically feasible in the here and now, to consider a future world we actually want to live in. That world will not be perfect - no matter what, climate change is happening - but we will figure out ways to adapt and become more sustainable. In some ways, humanity's future might even be better than life today.</p>

        <p>Imagination is important - if we can imagine this future when all our effort is worth it, that can give us the energy and conviction we need to make vital changes today. So what does a solarpunk future look like for Wheeling?</p>
      </div>

      <div className="inpsiration">
        <h2>Inspiration</h2>

        <img src="/static/solarpunk.webp" width="500" alt="A city full of plants and gardens." />

        <ul className="link-list">
          <li><a href="#">Real Life Solarpunk Places to Amaze You</a></li>
          <li><a href="#">Dear Alice</a></li>
          <li><a href="#">Almanac for the Anthropocene</a> (also available at <a href="#">OCPL</a>)</li>
        </ul>
        <ul>
          <li><strong>What does Wheeling look like in 20 years?</strong> 50 years? 100 years?</li>
          <li>How can we <strong>repurpose</strong> buildings, machinery, and infrastructure for a greener future?</li>
          <li>How will Wheeling be affected by <strong>climate change</strong>? How do we adapt?</li>
          <li>Where do we get our <strong>food and water</strong> from? What <strong>energy sources</strong> do we rely on? What do we use for <strong>transportation</strong>?</li>
          <li>How do <strong>local flora and fauna</strong> incorporate themselves into the city? Can we make city spaces work for plants, animals, and people?</li>
          <li>What happens when people and the environment have <strong>conflicting needs</strong>? What do we do when different people need different things?</li>
          <li>How do <strong>people with disabilities</strong> thrive in the Wheeling of the future?</li>
        </ul>

        <table>
          <tr><th>Yes</th><th>No</th></tr>
          <tr>     
            <td>An optimistic or hopeful future</td>
            <td>Grimdark cyberpunk hellscape</td>
          </tr>
          <tr>
            <td>Science fiction (improbable or unrealistic technology)</td>
            <td>Fantasy (elves and dragons and such)</td>
          </tr>
          <tr>
            <td>Rooted in a sense of place (here in Wheeling)</td>
            <td>Could be anywhere</td>
          </tr>
          <tr>
            <td>Creative ecological problem-solving</td>
            <td>Superficial eco-stuff (slap a solar panel on it)</td>
          </tr>
          <tr>
            <td>Forward-looking and embracing change</td>
            <td>A return to an idyllic past</td>
          </tr>
        </table>
      </div>

      <div className="budget">
        <h2>Budget &amp; Payment</h2>
        <p>The zine will be funded with a Wheeling Heritage grant and a short pre-sale on this website.</p>
        <p>Contributors will be paid $100 for a full (5.5 x 8.5) page of black-and-white art and $100 for 500 words of writing (20 cents per word). Two artists will be paid $200 each for color pieces, one for each cover.</p>
        <p>Contributors will also get a free copy of the zine.</p>
      </div>

      <div className="submissions">
        <h2>Submissions</h2>
        <p>Send submissions to solarpunkzine@makewheeling.com by February 15, 2023. Submissions will be accepted on a rolling basis.</p>
        <h3>Art</h3>
        <p>Art should incorporate Wheeling-specific imagery into the solarpunk aesthetic. Think about local architecture, geographical features, native plants and animals, cultures and customs. Not sure what to draw? Consider teaming up with a writer to illustrate an intriguing story or essay.
        </p>

        <p>Please submit a sketch of the work you&apos;d like to submit and a few examples of previous completed work. Note whether you&apos;re planning a color cover illustration or an interior black &amp; white illustration. If you submit a color piece, you may be asked  to re-work it to be black &amp; white.

Finished work must be 5.5&quot; x 8.5&quot; with .125&quot; bleed (so a total of 5.625&quot;x8.625&quot;).

You&apos;ll be paid 50% up front and 50% on completion. Your piece must be finished by April 1, 2023.</p>
        <h3>Essays &amp; Fiction</h3>
        <p>Written contributions should be short pieces less than 750 words long. This can be a scene of life in a future Wheeling, a list of alternate uses for decommissioned fracking equipment, thoughts on community-building and mutual aid, the biography of a revolutionary who hasn&apos;t yet been born, conservation tips from your great-grandma… Not sure what to write? Consider teaming up with an artist who has an inspiring vision.
        </p>

        <p>Please send the entire completed work. It must be between 50 and 750 words. You will be paid immediately upon acceptance of your work.
        </p>
      </div>

      <div className="buying-the-zine">
        <h2>Buying the zine</h2>
        <p>Want to buy the finished zine? Mark your calendar! Pre-sales at 15% off cover price will be live from March 15 - April 15, 2023. Enter your email to get an alert when pre-sales go live: 
        </p>
      </div>
    </>
  );
}
