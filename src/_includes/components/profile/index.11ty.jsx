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
    <>
      <Tabs />
      <div className="tab-content">
        <BasicInformation title="Account Details" />
        <ChangePassword title="Change Password" />
        <ProfilePhoto title="Profile Photo" />
        <About title="About" />
        <SocialContact title="Social & Contact" />
        <DeleteAccount title="Delete Account" />
      </div>
    </>
  )
}

export default Profile
