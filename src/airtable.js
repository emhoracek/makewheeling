const glitch = "https://make-wheeling-airtable.glitch.me";

export function formToJson(form) {
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

export function wakeUp(countdown, onWoke, onFail) {
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
    onFail();
  }
};


export function postToAirtableViaGlitch(e, onSuccess, onFail) {
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
        onSuccess();
      } else {
        throw "Failure :(";
      }
    })
    .catch(function () {
      onFail();
    });
};