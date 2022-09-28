import React, { useState, useEffect } from "react";

const glitch = "https://make-wheeling-airtable.glitch.me";

function postToAirtableViaGlitch(e, onSuccess, onError) {
  e.preventDefault();

  var form = document.getElementById("contact-form");

  const formData = new FormData(form);
  let jsonObject = {};

  for (const [key, value] of formData.entries()) {
    if (key == "interested-in" || key == "heard-about-via") {
      // create list from form data for these fields
      var list = [];
      var alreadyAdded = jsonObject[key];

      if (alreadyAdded) {
        list = alreadyAdded;
      }

      list.push(value);

      jsonObject[key] = list;
    } else {
      jsonObject[key] = value;
    }
  }

  window
    .fetch(glitch + "/api/contact", {
      method: "POST",
      body: JSON.stringify(jsonObject),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (json) {
      if (json.success) {
        onSuccess()
      } else {
        throw "Failure :(";
      }
    })
    .catch(function () {
      onError()
    });
}

const wakeUp = (countdown, onWoke, onError) => {
  if (countdown > 0) {
    window
      .fetch(glitch + "/api/ready", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        if (json.ready) {
          onWoke()
        } else {
          window.setTimeout(() => {
            wakeUp(countdown - 1, onWoke, onError);
          }, 1000);
        }
      });
  } else {
    onError()
  }
};

const ContactForm = () => {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  
  
  const onSuccess = () => {
    
  }
  
  wakeUp(5, () => {
        setReady(true)
        setError(false)
  }, () => {
    setError(true)
    setShowMessage(true)
    setMessage(
      "Sorry, the form isn't working. Please email libby@libbyhoracek.com to contact me."
    );
  })
  
  const messageStyle = {
    display: showMessage ? "block" : "none"
  }
  
  const submitValue = ready && !error ? "Send" : (error ? "Error :(" : "Please wait...")
  const submitDisabled = ready && !error ? undefined : "disabled"
  
  return (
    <>
      <form id="contact-form">
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

        <input type="submit" disabled={submitDisabled} id="submit-button" value={submitValue} />
      </form>
      <div styles={messageStyle}>
        <h3 id="message-title">Thank you!</h3>

        <p>We'll get back to you shortly.</p>
      </div>
    </>
  );
};

export default ContactForm;
