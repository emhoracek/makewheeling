import React, { useState, useEffect } from "react";

const glitch = "https://make-wheeling-airtable.glitch.me";

function formToJson(form) {
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
  return jsonObject;
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
          onWoke();
        } else {
          window.setTimeout(() => {
            wakeUp(countdown - 1, onWoke, onError);
          }, 1000);
        }
      });
  } else {
    onError();
  }
};

const ContactForm = () => {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("none");
  const [displayForm, setDisplayForm] = useState("block");
  const [message, setMessage] = useState({});

  const onFail = () => {
    setError(true);
    setDisplayMessage("block");
    setMessage({
      title: "Error",
      message:
        "Sorry, the form isn't working. Please email libby@libbyhoracek.com to contact me.",
    });
  };

  const postToAirtableViaGlitch = (e) => {
    e.preventDefault();

    var form = e.target;
    window
      .fetch(glitch + "/api/contact", {
        method: "POST",
        body: JSON.stringify(formToJson(form)),
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
          setError(false);
          setDisplayMessage("block");
          setDisplayForm("none");
          setMessage({
            title: "Success!",
            message:
              "We'll get in touch soon!",
          });
        } else {
          throw "Failure :(";
        }
      })
      .catch(function () {
        onFail();
      });
  };


  const formStyle = {
    display: displayForm,
  };

  const messageStyle = {
    display: displayMessage,
  };

  const submitValue =
    ready && !error ? "Send" : error ? "Error :(" : "Please wait...";
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

  return (
    <>
      <form style={formStyle} id="contact-form" action="#" onSubmit={postToAirtableViaGlitch}>
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
