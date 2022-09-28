import React, { useState, useEffect } from "react";

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
      <h1 class="title">
        Make Wheeling <input id="what" placeholder={partialAdjective} />
      </h1>
    </>
  );
};

export default MakeWheelingWhat;
