/* Skillerville Techspot — lightweight site interactions (vanilla JavaScript). */

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
  }

  // Kept global because the HTML buttons call this function.
  window.toggleMenu = function () {
    var menu = getMenu();
    if (menu) setMenuOpen(!menu.classList.contains("show"));
  };

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

  // Contact form is intentionally a demonstration only. No data is transmitted.
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
      alert("Please select a training track or reason for contacting us.");
      trackField.focus();
      return false;
    }
    if (!message) {
      alert("Please enter your message.");
      messageField.focus();
      return false;
    }

    alert(
      "Thanks, " + name + "! The form checks are complete, but this is only a demonstration. " +
      "Your message has NOT been sent or saved."
    );
    return false;
  };

  // Filters the available track cards and announces the result accessibly.
  window.searchTracks = function () {
    var searchInput = document.getElementById("trackSearchInput");
    if (!searchInput) return;

    var cards = document.querySelectorAll(".track-card");
    var filter = searchInput.value.trim().toLocaleLowerCase();
    var visibleCount = 0;

    cards.forEach(function (card) {
      var title = card.querySelector("h3");
      var searchableText = (card.textContent || "").toLocaleLowerCase();
      var matches = !filter || searchableText.indexOf(filter) !== -1;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    });

    var results = document.getElementById("trackSearchStatus");
    if (!results) {
      results = document.createElement("p");
      results.id = "trackSearchStatus";
      results.className = "search-status";
      results.setAttribute("role", "status");
      results.setAttribute("aria-live", "polite");
      searchInput.closest(".course-search-box").insertAdjacentElement("afterend", results);
    }

    results.textContent = visibleCount === 0
      ? "No training tracks match your search. Try another keyword."
      : "Showing " + visibleCount + (visibleCount === 1 ? " training track." : " training tracks.");
  };

  // Ensure the menu starts in a predictable, accessible state.
  document.addEventListener("DOMContentLoaded", function () {
    var menu = getMenu();
    var button = document.querySelector(".menu-toggle");
    if (menu && button) {
      button.setAttribute("aria-controls", "navMenu");
      button.setAttribute("aria-expanded", "false");
    }
  });
})();
