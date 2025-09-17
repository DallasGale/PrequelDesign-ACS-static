import React from "react"
import BasicInformation from "./basicInformation/index.11ty"
import ChangePassword from "./changePassword/index.11ty"
import ProfilePhoto from "./profilePhoto/index.11ty"
import About from "./about/index.11ty"
import SocialContact from "./socialContact/index.11ty"
import DeleteAccount from "./deleteAccount/index.11ty"
import Tabs from "../tabs/index.11ty"

const Profile = () => {
  return (
    <div className="profile">
      <Tabs
        tabs={[
          {
            id: "#basic_information_tab",
            label: "Account Details",
            active: true,
          },
          {
            id: "#change_password_tab",
            label: "Change Password",
            active: false,
          },
          {
            id: "#images_tab",
            label: "Profile Photo",
            active: false,
          },
          {
            id: "#about_tab",
            label: "About",
            active: false,
          },
          {
            id: "#social_tab",
            label: "Social & Contact",
            active: false,
          },
          {
            id: "#delete_account_tab",
            label: "Delete Account",
            active: false,
          },
        ]}
      />
      <div className="tab-content">
        <BasicInformation title="Account Details" />
        <ChangePassword title="Change Password" />
        <ProfilePhoto title="Profile Photo" />
        <About title="About" />
        <SocialContact title="Social & Contact" />
        <DeleteAccount title="Delete Account" />
      </div>
    </div>
  )
}

export default Profile
