/* BOBMANUEL PORTFOLIO
   This file contains the small interactive parts of the website. */
"use strict";

// 1. Mobile navigation: open and close the page links.
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  // Close the menu after a visitor chooses a page.
  siteNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });

  // Escape is another way to close the mobile menu.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }
  });
}

// 2. Contact form: check the fields but do not send or store anything.
const contactForm = document.querySelector("#contact-form");
const formFeedback = document.querySelector("#form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      formFeedback.textContent = "Please complete all fields with valid details.";
      contactForm.reportValidity();
      return;
    }
    formFeedback.textContent = "The form is valid. This is a demonstration only; no message was sent or saved.";
    contactForm.reset();
  });
}