"use strict";

$(document).ready(function () {
  console.log("Sidebar script initialized");

  // Set active state for sidebar menu items based on current URL
  const path = window.location.href;

  $(".sidebar a").each(function () {
    // Skip links with no-active-state class
    if ($(this).hasClass("no-active-state")) {
      return; // Continue to next iteration
    }

    const currentUrl = this.href;

    // Check if current link matches the page URL
    if (currentUrl === path) {
      console.log("Active link found:", this);
      $(this).addClass("sidebar__list-item-link--active");
      $(this).find("svg").addClass("sidebar__list-item-icon--active");
    } else {
      // Remove active classes from non-matching links
      $(this).removeClass("sidebar__list-item-link--active");
      $(this).find("svg").removeClass("sidebar__list-item-icon--active");
    }
  });
});