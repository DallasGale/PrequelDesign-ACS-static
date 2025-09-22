import React from "react"
import TextInput from "../../textInput/index.11ty"
import ProfileLayout from "../layout.11ty"
import SelectInput from "../../selectInput/index.11ty"
import PrimaryButton from "../../primaryButton/index.11ty"

const BasicInformation = ({title}) => {
  return (
    <ProfileLayout title={title} id="basic_information_tab" active>
      <form
        action="{{route('users.basic_info.update')}}"
        method="POST"
        enctype="multipart/form-data"
      >
        <div className="row form-fields">
          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="name"
              id="firstName"
              label="First Name"
              type="text"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="name"
              id="lastName"
              label="Last Name"
              type="email"
            />
          </div>

          <div className="col-12 mb-3">
            <SelectInput
              required={true}
              id="birth"
              label="Birth Year"
              placeholder="Select Birth Year"
            />
          </div>

          <div className="col-12 mb-3">
            <SelectInput
              required={true}
              id="gender"
              label="Gender"
              placeholder="Select Your Gender"
            />
          </div>

          <div className="col-12 mb-3">
            <SelectInput
              required={true}
              id="employment_status"
              label="Employment Status"
              placeholder="Select Employment Status"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="post_code"
              id="post_code"
              label="Post Code"
              type="string"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="school_name"
              id="school_name"
              label="Name of School"
              type="string"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="phone"
              id="phone"
              label="Mobile Number"
              type="text"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              htmlFor="land_phone"
              id="lanphone"
              label="Land Line"
              type="text"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              required={true}
              htmlFor="email"
              id="lanphone"
              label="Email"
              type="email"
            />
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
export default BasicInformation
