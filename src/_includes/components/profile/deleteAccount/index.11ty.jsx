import React from "react"
import ProfileLayout from "../layout.11ty"
import TextInput from "../../textInput/index.11ty"
import SecondaryButton from "../../secondaryButton/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const DeleteAccount = ({title}) => {
  return (
    <ProfileLayout title={title} id="delete_account_tab">
      <div className="row">
        <div class="col-12 col-xl-6">
          <img
            src="https://acs.entersoft.academy/public/frontend/infixlmstheme/img/account/delete_account.png"
            width="100%"
          />
        </div>
        <div class="col-12 col-xl-6">
          <form
            action="{{route('users.basic_info.update')}}"
            method="POST"
            enctype="multipart/form-data"
          >
            <div className="form-fields form__change-password ">
              <div class="row">
                <div className="col-12 mb-3">
                  <TextInput
                    htmlFor="email"
                    id="email"
                    label="Email Address"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="col-12 mb-3">
                  <TextInput
                    htmlFor="twitter"
                    id="twitter"
                    label="Existing Password"
                    type="password"
                    placeholder="Type exisiting password"
                  />
                </div>
              </div>
            </div>
            <div className="form-cta">
              <PrimaryButton type="submit" label="Delete Account" />
            </div>
          </form>
        </div>
      </div>
    </ProfileLayout>
  )
}

export const data = {
  title: "",
}

export default DeleteAccount
