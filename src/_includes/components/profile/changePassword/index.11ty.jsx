import React from "react"
import ProfileLayout from "../layout.11ty"
import TextInput from "../../textInput/index.11ty"
import SecondaryButton from "../../secondaryButton/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const ChangePassword = ({title}) => {
  return (
    <ProfileLayout title={title} id="change_password_tab">
      <form
        action="{{route('users.basic_info.update')}}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="form-fields form__change-password ">
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="email"
                id="email"
                label="Email"
                type="email"
              />
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="current_password"
                id="current_password"
                label="Current Password"
                type="password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="new_password"
                id="new_password"
                label="New Password"
                type="password"
              />
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="confirm_password"
                id="confirm_password"
                label="Re-Type Password"
                type="password"
              />
            </div>
          </div>
        </div>
        <div className="form-cta">
          <PrimaryButton type="submit" label="Save" />
        </div>
      </form>
    </ProfileLayout>
  )
}
export const data = {
  title: "",
}

export default ChangePassword
