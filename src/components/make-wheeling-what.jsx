import React, { useState, useEffect } from "react";
import { postToAirtableViaGlitch, wakeUp } from '../airtable.js'

const adjectives = [
  "weird",
  "wild",
  "wonderful",
  "smarter",
  "safer",
  "more connected",
  "friendlier",
  "cuter",
  "stronger",
  "kinder",
  "crafty",
  "high-tech",
  "greener",
  "more just",
];

const inp = document.getElementById("what");
const randomAdjective =
  adjectives[Math.floor(Math.random() * adjectives.length)];

const MakeWheelingWhat = () => {
  const [adjective, setAdjective] = useState(randomAdjective);
  const [partialAdjective, setPartialAdjective] = useState("");
  const [action, setAction] = useState("type");
  const [hasInput, setHasInput] = useState(false);
  const [ready, setReady] = useState(false)

  const onInput = (e) => {
    if (e.target.value === "") {
      setHasInput(false)
    } else {
      setHasInput(true)
    }
  }

  const onSubmit = (e) => {
    postToAirtableViaGlitch(e, () => {}, () => {})
  }

  useEffect(() => {
    wakeUp(5, () => {
      () => {
        setReady(true);
      },
        onFail
    })
  }, [])

  const submitValue =
    ready ? "Send" : "Please wait...";
  const submitDisabled = ready ? undefined : "disabled";

  const formStyle = { display : hasInput ? "block": "none"}

  useEffect(() => {
    if (action === "type") {
      const currLetters = partialAdjective.length;
      if (currLetters < adjective.length) {
        setTimeout(() => {
          setPartialAdjective(adjective.slice(0, currLetters + 1));
        }, 300);
      } else {
        setTimeout(() => setAction("backspace"), 5000);
      }
    }

    if (action === "backspace") {
      const currLetters = partialAdjective.length;
      if (currLetters > 0) {
        setTimeout(() => {
          setPartialAdjective(adjective.slice(0, currLetters - 1));
        }, 100);
      } else {
        setAdjective(adjectives[Math.floor(Math.random() * adjectives.length)])
        setTimeout(() => setAction("type"), 500);
      }
    }
  }, [partialAdjective, action]);

  return (
    <>
      <form onSubmit={onSubmit} action="#">
        <h1 class="title">
          Make Wheeling <input id="what" name="comment" onInput={onInput} placeholder={partialAdjective} />
        </h1>
        <div style={formStyle}>
          <p>Submit how you would like to make your mark on the city and it may be 
            included on the website.
          </p>
          <label>Your name: </label><input name="name" />
          <input type="submit" disabled={submitDisabled} value={submitValue} />
        </div>
      </form>
    </>
  );
};

export default MakeWheelingWhat;
