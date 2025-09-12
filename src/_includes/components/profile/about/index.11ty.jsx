import React from "react"
import ProfileLayout from "../layout.11ty"
import TextInput from "../../textInput/index.11ty"
import TextareaInput from "../../textareaInput/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const About = ({title}) => {
  return (
    <ProfileLayout title={title} id="about_tab">
      <form
        action="{{route('users.basic_info.update')}}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="form-fields form__change-password ">
          <div className="row">
            <div className="col-12 col-lg-6  mb-3">
              <TextInput id="job_title" label="Job Title" type="string" />
            </div>

            <div className="col-12 col-lg-6 mb-3">
              <TextareaInput
                className="short_description_field"
                htmlFor=""
                id=""
                label="Short Description"
                type="string"
              />
            </div>
          </div>
          <small class="required_mark_theme">
            "Short Description" will be displayed at the bottom of your name on
            the profile cards. Keep it short (80 to 100 words).{" "}
            <span class="short_description_character_count text-danger"></span>
          </small>
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

export default About
