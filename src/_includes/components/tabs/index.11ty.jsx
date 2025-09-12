import React from "react"
import Tab from "./tab/index.11ty"

const Tabs = () => {
  return (
    <ul class="nav nav-tabs ms-0 mb-3 border-0">
      <Tab id="#basic_information_tab" label="Account Details" active />
      <Tab id="#change_password_tab" label="Change Password" />
      <Tab id="#images_tab" label="Profile Photo" />
      <Tab id="#about_tab" label="About" />
      <Tab id="#social_tab" label="Social & Contact" />
      <Tab id="#delete_account_tab" label="Delete Account" />
    </ul>
  )
}

export default Tabs
