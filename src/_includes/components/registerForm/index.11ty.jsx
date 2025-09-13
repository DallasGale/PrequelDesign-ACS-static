import React from "react"
import TextInput from "../textInput/index.11ty"
import SecondaryButton from "../secondaryButton/index.11ty"
import SelectInput from "../selectInput/index.11ty"
import CheckGroup from "../checkGroup/index.11ty"
import CheckInput from "../checkInput/index.11ty"
import PrimaryButton from "../primaryButton/index.11ty"

const RegisterForm = ({title}) => {
  return (
    <>
      <form action="" method="POST" enctype="multipart/form-data">
        <div className="row form__register">
          <div className="col-12 col-lg-6 mb-3">
            <TextInput id="first_name" label="First Name" type="string" />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <TextInput id="last_name" label="Job Title" type="string" />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <TextInput id="email" label="Email" type="email" />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <TextInput id="password" label="Password" type="password" />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="birth_year"
              label="Birth Year"
              placeholder="please select"
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="gender"
              label="Gender"
              placeholder="please select"
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="employment"
              label="Employment Status"
              placeholder="please select"
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <TextInput
              id="post_code"
              label="Post Code"
              type="number"
              name="identity[]"
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              id="school_name"
              label="Name Of School"
              type="text"
              name="identity[]"
            />
          </div>

          <div className="col-12 mb-3">
            <div className="text-input__field form__equity-group-wrapper">
              <CheckGroup label="Equity Group">
                <CheckInput
                  id="Indigenous"
                  label="Indigenous"
                  name="identity[]"
                />
                <CheckInput
                  id="cald"
                  label="CALD (Culturally and Linguistically Diverse)"
                  name="identity[]"
                />
                <CheckInput
                  id="disability"
                  label="Disability"
                  name="identity[]"
                />
                <CheckInput
                  id="prefer"
                  label="Prefer not to say"
                  name="identity[]"
                />
                <CheckInput
                  id="none"
                  label="None of the above"
                  name="identity[]"
                />
              </CheckGroup>
            </div>
          </div>

          <div className="col-12 mb-3">
            <TextInput
              id="phone"
              label="Phone Number"
              type="phone"
              name="identity[]"
            />
          </div>
        </div>

        <PrimaryButton type="submit" label="Register" />
      </form>

      <small className="label2">
        You already have an account?{" "}
        <a href="/login" className="text-link">
          Login
        </a>
      </small>
    </>
  )
}
export const data = {
  title: "",
}

export default RegisterForm
