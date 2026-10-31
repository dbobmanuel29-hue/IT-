/* ==========================================================================
   SKILLERVILLE TECHSPOT - JAVASCRIPT CONTROLLER (script.js)
   Written for: IT / SIWES Web Development Defense
   Technologies: Vanilla JavaScript (Zero external libraries)
   ========================================================================== */

// 1. Mobile Navigation Menu Toggle
function toggleMenu() {
  var menu = document.getElementById("navMenu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}

// 2. Simple Contact Form Validation
function validateContactForm(event) {
  if (event) {
    event.preventDefault();
  }

  var name = document.getElementById("fullName").value.trim();
  var email = document.getElementById("emailAddress").value.trim();
  var track = document.getElementById("trackSelect").value;
  var message = document.getElementById("messageText").value.trim();

  // Basic validation check
  if (name === "") {
    alert("Please enter your full name.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  if (track === "") {
    alert("Please select a training track or reason for contacting us.");
    return false;
  }

  if (message === "") {
    alert("Please enter your message.");
    return false;
  }

  // Friendly alert popup
  alert("Thank you, " + name + "! Your inquiry has been sent to Skillerville Techspot. We will reach out to you shortly.");

  // Reset form fields
  document.getElementById("contactForm").reset();
  return true;
}

// 3. Simple Search Function for Course Tracks
function searchTracks() {
  var searchInput = document.getElementById("trackSearchInput");
  if (!searchInput) return;

  var filter = searchInput.value.toLowerCase();
  var cards = document.getElementsByClassName("track-card");

  for (var i = 0; i < cards.length; i++) {
    var title = cards[i].getElementsByTagName("h3")[0];
    if (title) {
      var text = title.textContent || title.innerText;
      if (text.toLowerCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }
}
