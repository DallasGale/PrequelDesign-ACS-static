import React from "react"
import TextInput from "../textInput/index.11ty"
import SecondaryButton from "../secondaryButton/index.11ty"
import SelectInput from "../selectInput/index.11ty"
import CheckGroup from "../checkGroup/index.11ty"
import CheckInput from "../checkInput/index.11ty"
import PrimaryButton from "../primaryButton/index.11ty"

const RegisterForm = () => {
  return (
    <>
      <form action="" method="POST" enctype="multipart/form-data">
        <div className="row form__register">
          <div className="col-12 col-lg-6 mb-3">
            <TextInput
              id="first_name"
              label="First Name"
              type="string"
              required={true}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <TextInput
              id="last_name"
              label="Job Title"
              type="string"
              required={true}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <TextInput id="email" label="Email" type="email" required />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <TextInput
              id="password"
              label="Password"
              type="password"
              required={true}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="birth_year"
              label="Birth Year"
              placeholder="please select"
              required={true}
            />
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="gender"
              label="Gender"
              placeholder="please select"
              required={true}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <SelectInput
              id="employment"
              label="Employment Status"
              placeholder="please select"
              required={true}
            />
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <TextInput
              id="post_code"
              label="Post Code"
              type="number"
              name="post_code"
              required={true}
            />
          </div>

          <div className="col-12 mb-3">
            <TextInput
              id="school_name"
              label="Name Of School"
              type="text"
              name="school_name"
              required={true}
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <TextInput
              id="landline"
              label="Landline Phone"
              type="landline"
              name="landline"
            />
          </div>
          <div className="col-12 col-md-6 mb-3">
            <TextInput
              id="mobile"
              label="Mobile Phone"
              type="mobile"
              name="mobile"
            />
          </div>
          <div className="col-12 mb-3">
            <CheckGroup label="Equity Group">
              <div className="text-input__field form__equity-group-wrapper">
                <CheckInput id="Indigenous" label="Indigenous" name="equity" />
                <CheckInput
                  id="cald"
                  label="CALD (Culturally and Linguistically Diverse)"
                  name="equity"
                />
                <CheckInput id="disability" label="Disability" name="equity" />
                <CheckInput
                  id="prefer"
                  label="Prefer not to say"
                  name="equity"
                />
                <CheckInput id="none" label="None of the above" name="equity" />
              </div>
            </CheckGroup>
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
export default RegisterForm
