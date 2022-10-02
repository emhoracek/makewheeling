import React, { useState, useEffect } from "react";
import {postToAirtableViaGlitch, wakeUp} from '../airtable.js'

const ContactForm = () => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("none");
  const [displayForm, setDisplayForm] = useState("block");
  const [message, setMessage] = useState({});
  const [timeLeft, setTimeLeft] = useState(15);

  const decrementTimeLeft = () => {
    if (timeLeft > 0) { 
      setTimeLeft(timeLeft - 1)
    } else {
      setError("Unable to reach database.")
    };
  }

  const onFail = () => {
    setError(true);
    setDisplayMessage("block");
    setMessage({
      title: "Error",
      message:
        "Sorry, the form isn't working. Please email libby@libbyhoracek.com to contact me.",
    });
  };

  const onSuccess = () => {
    setError(false);
    setDisplayMessage("block");
    setDisplayForm("none");
    setMessage({
      title: "Success!",
      message:
        "We'll get in touch soon!",
  })}

  const onSubmit = (e) => {
    postToAirtableViaGlitch(e, onSuccess, onFail)
  }

  const formStyle = {
    display: displayForm,
  };

  const messageStyle = {
    display: displayMessage,
  };

  const submitValue =
    ready && !error ? "Send" : error ? "Error :(" : `Please wait... ${timeLeft}`;
  const submitDisabled = ready && !error ? undefined : "disabled";

  useEffect(() => {
    wakeUp(
      5,
      () => {
        setDisplayMessage("none");
        setReady(true);
        setError(false);
      },
      onFail
    );
  }, [])

  useEffect(() => {
    setTimeout(decrementTimeLeft, 1000)
  }, [timeLeft])

  return (
    <>
      <form style={formStyle} id="contact-form" action="#" onSubmit={onSubmit}>
        <p>
          <label for="name">Name</label>
          <br />
          <input id="name" name="name" />
        </p>
        <p>
          <label>Email</label> <br />
          <input id="email" name="email" type="email" />
        </p>
        <p>
          <label>Comments</label>
          <br />
          <textarea name="comments" rows="4"></textarea>
        </p>

        <input
          type="submit"
          disabled={submitDisabled}
          id="submit-button"
          value={submitValue}
        />
      </form>
      <div style={messageStyle}>
        <h3 id="message-title">{message.title}</h3>

        <p>{message.message}</p>
      </div>
    </>
  );
};

export default ContactForm;
