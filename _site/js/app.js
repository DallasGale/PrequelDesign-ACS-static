"use strict"
$(document).ready(function () {
  console.log("hi")

  // Active Menu
  let path = window.location.href
  $(".sidebar a").each(function () {
    if ($(this).hasClass("no-active-state")) {
      return // Continue to next iteration
    }
    let current_url = this.href

    if (current_url === path) {
      console.log("this", this)
      $(this).addClass("sidebar__list-item-link--active")
      $(this).find("svg").addClass("sidebar__list-item-icon--active")
    } else {
      $(this).removeClass("sidebar__list-item-link--active")
      $(this).find("svg").removeClass("sidebar__list-item-icon--active")
    }
  })
})
