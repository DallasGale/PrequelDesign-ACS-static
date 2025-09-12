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
                    htmlFor="linkedin"
                    id="linkedin"
                    label="Share Your LinkedIn Profile Link"
                    type="string"
                    placeholder="Linkedin Profile URL"
                  />
                </div>
                <div className="col-12 mb-3">
                  <TextInput
                    htmlFor="twitter"
                    id="twitter"
                    label="Share Your X Profile Link"
                    type="string"
                    placeholder="X Profile URL"
                  />
                </div>

                <div className="col-12 mb-3">
                  <TextInput
                    htmlFor="facebook"
                    id="facebook"
                    label="Share Your Facebook Profile Link"
                    type="string"
                    placeholder="Facebook Profile URL"
                  />
                </div>
              </div>
            </div>
            <div className="form-cta">
              <PrimaryButton type="submit" label="Save" />
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
