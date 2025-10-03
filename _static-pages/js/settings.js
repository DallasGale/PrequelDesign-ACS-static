// Settings page tab management
console.log("Settings tabs initialized");

const tabs = $('a[data-bs-toggle="tab"]');

// Handle tab visibility changes
tabs.on("show.bs.tab", function (e) {
  const targetHref = $(e.target).attr("href");
  
  console.log("Tab switching to:", targetHref);

  // Store active tab for page refresh persistence
  localStorage.setItem("activeSettingsTab", targetHref);

  // Toggle active class on target panel
  const activePanel = $(targetHref);
  activePanel.toggleClass("active");
});