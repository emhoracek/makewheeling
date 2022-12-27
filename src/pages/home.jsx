import * as React from "react";
import MakeWheelingWhat from "../components/make-wheeling-what.jsx";
import ContactForm from "../components/contact-form.jsx";

export default function Home() {
  return (
    <>
      <MakeWheelingWhat />

      <div class="about">
        <h2>A Community Technology Lab</h2>
        <p>
          Eventually <strong>Make Wheeling</strong> could be a permanent 
          space where anyone can access education, support,
          equipment, and inspiration to invent innovative solutions to the
          problems that we face as individuals <em>and</em> as members of
          intersecting local and global communities.
        </p>

        <p>
          <strong>Make Wheeling</strong> will start as a digital 
          presence with temporary physical spaces
          embedded in local businesses and public areas.
        </p>
      </div>

      <div class="faq">
        <h2>Frequently Asked Questions</h2>

        <ol>
          <li>
            <dt>Technology? What do you mean by technology?</dt>
            <dd>
              <p><strong>Make Wheeling</strong> defines technology as
              the practical application of science. Cooking 
              food uses technology. Knitting uses
              technology. Consensus decision-making is a technology. And of
              course, your smart phone uses technology.</p>
              <p><strong>Make Wheeling</strong> is a place where you can perfect
              your
              <em>technique</em>, whether that's coding software, building
              hardware, mending clothing, painting portraits, managing a team,
              or addressing a neighborhood conflict. And it's a place where you
              can create and improve <em>tools</em>, whether that's a computer,
              an application build system, a facilitation method, or a better
              crochet hook.</p>
            </dd>
          </li>
          <li>
            <dt>That seems... absurdly broad.</dt>
            <dd>
              That's not a question, but yeah. You're probably right. However
              I'm only one person and I don't want to guess what kind of
              technology will be useful to our community by myself. I want to
              see who is interested in the project and how we can help each
              other achieve our goals before narrowing anything down.
            </dd>
          </li>
          <li>
            <dt>You keep saying "I". Who are you anyway?</dt>
            <dd>
              <a href="http://libbyhoracek.com">I'm Libby </a>. I'm a Moundsville native with a long interest in
              computers, coding, and craft, as well as alternative education and unschooling. In 2015 I attended
              attended <a href="https://recurse.com">Recurse Center</a> and
              discovered the power of self-directed learning in community
              with other learners. I've been a member of <a href="https://www.makerspace.nyc/">Makerspace NYC</a>{" "}
              and <a href="https://hackpgh.org/">Hack PGH</a>, as well as a member
              of the leadership committee for{" "}
              <a href="https://twitter.com/mergesortnyc">MergeSort NYC</a>. I've
              also learned a lot from{" "}
              <a href="https://alliedmedia.org/">Allied Media Projects</a> and&nbsp;
              <a href="https://detroitcommunitytech.org/">
                Detroit Community Technology Project
              </a>
              . I'm currently a worker-owner and software developer at&nbsp;
              <a href="https://positiondev.com">Position Development</a>.
            </dd>
          </li>
          <li>
            <dt>How can I get involved?</dt>
            <dd>
              Fill out the form below and I'll be in touch! <br />
              <ContactForm />
            </dd>
          </li>
        </ol>
      </div>
    </>
  );
}
