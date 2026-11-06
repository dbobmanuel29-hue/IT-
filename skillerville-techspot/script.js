/* Bobmanuel's SIWES portfolio — simple interactions using vanilla JavaScript. */

(function () {
  "use strict";

  function getMenu() {
    return document.getElementById("navMenu");
  }

  function setMenuOpen(open) {
    var menu = getMenu();
    var button = document.querySelector(".menu-toggle");
    if (!menu || !button) return;

    menu.classList.toggle("show", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    button.textContent = open ? "×" : "☰";
  }

  // The HTML menu button calls this function.
  window.toggleMenu = function () {
    var menu = getMenu();
    if (menu) setMenuOpen(!menu.classList.contains("show"));
  };

  // Close the mobile menu with Escape or after choosing a page.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", function (event) {
    var menu = getMenu();
    var button = document.querySelector(".menu-toggle");
    if (!menu || !button || !menu.classList.contains("show")) return;

    if (!menu.contains(event.target) && !button.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var menu = getMenu();
    var button = document.querySelector(".menu-toggle");

    if (menu && button) {
      button.setAttribute("aria-controls", "navMenu");
      button.setAttribute("aria-expanded", "false");
      button.textContent = "☰";

      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          setMenuOpen(false);
        });
      });
    }
  });

  // This demonstration form validates entries but does not send or save data.
  window.validateContactForm = function (event) {
    if (event) event.preventDefault();

    var nameField = document.getElementById("fullName");
    var emailField = document.getElementById("emailAddress");
    var trackField = document.getElementById("trackSelect");
    var messageField = document.getElementById("messageText");

    if (!nameField || !emailField || !trackField || !messageField) return false;

    var name = nameField.value.trim();
    var email = emailField.value.trim();
    var track = trackField.value;
    var message = messageField.value.trim();

    if (!name) {
      alert("Please enter your full name.");
      nameField.focus();
      return false;
    }
    if (!email || !emailField.checkValidity()) {
      alert("Please enter a valid email address.");
      emailField.focus();
      return false;
    }
    if (!track) {
      alert("Please select a reason for contact.");
      trackField.focus();
      return false;
    }
    if (!message) {
      alert("Please enter your message.");
      messageField.focus();
      return false;
    }

    alert(
      "Thanks, " + name + "! The form checks are complete. " +
      "This is only a demonstration: your message has NOT been sent or saved."
    );
    return false;
  };

})();
