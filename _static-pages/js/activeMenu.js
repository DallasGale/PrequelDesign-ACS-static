$(function ($) {
  let path = window.location.href
  $(".main_menu a").each(function () {
    let current_url = this.href

    if (current_url === path) {
      $(this).parents(".submenu").closest("li").addClass("submenu_active")
      $(this).addClass("active")
    } else {
      current_url += "/"
    }
    if (path.startsWith(current_url)) {
      $(this).parents(".submenu").closest("li").addClass("submenu_active")
      $(this).addClass("active")
    }
  })
})
