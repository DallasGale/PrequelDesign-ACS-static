console.log("hello from settings")

const tabs = $('a[data-bs-toggle="tab"]')

console.log({tabs})

tabs.on("show.bs.tab", function (e) {
  console.log({e})

  // Not sure why this is being set to localStorage, but i am keeping it here anyway.
  localStorage.setItem("activeSettingsTab", $(e.target).attr("href"))
  let id = $(e.target).attr("href")
  let activePanel = $(id)
  console.log({activePanel})
  activePanel.toggleClass("active")
})
