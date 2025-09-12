import React from "react"
import ProfileLayout from "../layout.11ty"
import TextInput from "../../textInput/index.11ty"
import SecondaryButton from "../../secondaryButton/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const SocialContact = ({title}) => {
  return (
    <ProfileLayout title={title} id="social_tab">
      <form
        action="{{route('users.basic_info.update')}}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="form-fields form__change-password ">
          <div class="row">
            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="linkedin"
                id="linkedin"
                label="Share Your LinkedIn Profile Link"
                type="string"
                placeholder="Linkedin Profile URL"
              />
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <TextInput
                htmlFor="twitter"
                id="twitter"
                label="Share Your X Profile Link"
                type="string"
                placeholder="X Profile URL"
              />
            </div>
            <div className="col-12 col-lg-6 mb-3">
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
    </ProfileLayout>
  )
}

export const data = {
  title: "",
}

export default SocialContact
