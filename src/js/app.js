"use strict"

console.log("hi")

// Active Menu
$(function ($) {
  let path = window.location.href
  $(".sidebar a").each(function () {
    let current_url = this.href

    console.log({current_url, path})
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
