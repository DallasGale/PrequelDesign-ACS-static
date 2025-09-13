const mobileMenuTrigger = $("#mobile-menu-trigger")
const mobileMenu = $("#mobile-menu")

mobileMenuTrigger.on("click", (e) => {
  console.log({e})
  mobileMenu.toggleClass("visible")
})
