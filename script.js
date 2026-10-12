
var headingChanged = false;

function changeHeading() {
  var heading = document.getElementById("main-heading");

  if (headingChanged == false) {
    heading.textContent = "Your Campus, Your Events";
    headingChanged = true;
  } else {
    heading.textContent = "Welcome to Campus Event Management";
    headingChanged = false;
  }
}

var cardColored = false;

function changeCardColor() {
  var card = document.getElementById("card1");

  if (cardColored == false) {
    card.style.backgroundColor = "#fff0c9";
    card.style.borderTopColor = "#e8a33d";
    cardColored = true;
  } else {
    card.style.backgroundColor = "white";
    card.style.borderTopColor = "#1f3a5f";
    cardColored = false;
  }
}

function toggleHighlights() {
  var box = document.getElementById("highlights");
  box.classList.toggle("hidden");
}


// Event page yaha se

function addEvent() {
  var input = document.getElementById("event-name");
  var message = document.getElementById("event-message");
  var list = document.getElementById("added-events");

  var name = input.value.trim();

  if (name == "") {
    message.style.color = "#b22a2a";
    message.textContent = "Please enter an event name first.";
    return;
  }

  // List mei names
  list.innerHTML = list.innerHTML + "<li>" + name + "</li>";

  // confirmation message
  message.style.color = "#1d7a3a";
  message.textContent = "Event \"" + name + "\" has been submitted successfully.";

  input.value = "";
}

var cardUpdated = false;

function updateEventCard() {
  var card = document.getElementById("event1");
  var desc = document.getElementById("event1-desc");

  if (cardUpdated == false) {
    desc.textContent = "Registrations are now open! Teams of three can sign up from the Register page.";
    card.style.backgroundColor = "#e3f1e7";
    card.style.borderTopColor = "#1d7a3a";
    cardUpdated = true;
  } else {
    desc.textContent = "A 24 hour coding event where teams of three build a working project on a given theme.";
    card.style.backgroundColor = "white";
    card.style.borderTopColor = "#1f3a5f";
    cardUpdated = false;
  }
}


// Registration page yaha se

function registerStudent() {
  var name = document.getElementById("student-name").value.trim();
  var roll = document.getElementById("roll-number").value.trim();
  var email = document.getElementById("email").value.trim();
  var event = document.getElementById("event-select").value;
  var message = document.getElementById("reg-message");

  if (name == "" || roll == "" || email == "" || event == "") {
    message.className = "error";
    message.textContent = "Error: please fill in all the fields before registering.";
  } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
    message.className = "error";
    message.textContent = "Error: please enter a valid email address.";
  } else {
    message.className = "success";
    message.innerHTML = "Thank you, <b>" + name + "</b> (Roll No. " + roll + ")! " +
      "You have been registered for <b>" + event + "</b>. " +
      "A confirmation will be sent to " + email + ".";
  }
}

var sizeIndex = 0;
var sizes = ["28px", "36px", "20px"];

function changeFontSize() {
  var heading = document.getElementById("registration-heading");

  sizeIndex = sizeIndex + 1;
  if (sizeIndex >= sizes.length) {
    sizeIndex = 0;
  }
  heading.style.fontSize = sizes[sizeIndex];
}

function toggleForm() {
  var form = document.getElementById("form-section");

  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
