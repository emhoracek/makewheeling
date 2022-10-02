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
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState(false)
  const [ready, setReady] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)

  const decrementTimeLeft = () => {
    if (timeLeft > 0) { 
      setTimeLeft(timeLeft - 1)
    } else {
      setError("Unable to reach database")
    };
  }

  const onInput = (e) => {
    if (e.target.value === "") {
      setHasInput(false)
    } else {
      setHasInput(true)
    }
  }

  const onSubmit = (e) => {
    setDisabled(true)
    postToAirtableViaGlitch(e, () => {setSubmitted(true), setDisabled(false)}, () => {setDisabled(false)})
  }

  useEffect(() => {
    wakeUp(5,
      () => {
        setReady(true);
      },
      () => {

      }
    )
  }, [])

  const submitValue =
    ready && !error ? "Send" : error ? "Error :(" : `Please wait... ${timeLeft}`;
  const submitDisabled = ready && !disabled ? undefined : "disabled";

  const formStyle = { display : hasInput && !submitted ? "block": "none"}

  useEffect(() => {
    setTimeout(decrementTimeLeft, 1000)
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

  useEffect(() => {
    setTimeout(decrementTimeLeft, 1000)
  }, [timeLeft])

  return (
    <>
      <form onSubmit={onSubmit} action="#">
        <h1 className="title">
          <span className="makewheeling">Make Wheeling</span>
          <input id="what" name="blank" onInput={onInput} placeholder={partialAdjective} />
        </h1>
        <div style={formStyle}>
          <p>Submit how you would like to make your mark on the city and it may be 
            included on the website.
          </p>
          <label>Your name: </label><input name="name" />
          <input className="submit-idea" type="submit" disabled={submitDisabled} value={submitValue} />
        </div>
      </form>
    </>
  );
};

export default MakeWheelingWhat;
