/* BOBMANUEL PORTFOLIO
   This file handles the small interactive features used by the pages. */
"use strict";

/* 1. Mobile navigation: show and hide the page links. */
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // Close the navigation after a page link is selected.
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });

  // Allow the Escape key to close the mobile navigation.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    }
  });
}

/* 2. Practice contact form: validate fields without sending a message. */
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formFeedback.textContent = "Please enter your name, a valid email and a message.";
      contactForm.reportValidity();
      return;
    }

    formFeedback.textContent = "All fields look good. This practice form does not send or save messages.";
    contactForm.reset();
  });
}



/* 3. Reveal sections gently as the visitor scrolls down. */
const revealItems = document.querySelectorAll(
  ".section, .page-intro, .timeline-item, .info-card, .skill-card, .form-panel, .contact-links a"
);
if ("IntersectionObserver" in window) {
  revealItems.forEach(function (item) {
    item.setAttribute("data-reveal", "");
  });
  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(function (item) {
    item.classList.add("is-visible");
  });
}
