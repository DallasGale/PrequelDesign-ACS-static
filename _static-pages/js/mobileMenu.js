// Mobile menu toggle functionality
const mobileMenuTrigger = $("#mobile-menu-trigger");
const mobileMenu = $("#mobile-menu");

// Toggle mobile menu visibility on trigger click
mobileMenuTrigger.on("click", function (e) {
  console.log("Mobile menu toggled", { event: e });
  mobileMenu.toggleClass("visible");
});