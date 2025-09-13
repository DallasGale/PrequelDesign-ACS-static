import React from "react"

import BaseLayout from "./baseLayout.11ty"
import TextInput from "./_includes/components/textInput/index.11ty"
import PrimaryButton from "./_includes/components/primaryButton/index.11ty"

const Index = ({title}) => {
  return (
    <BaseLayout>
      <div className="page-content__sign-in">
        <h1 className="display1">Sign In</h1>

        <form
          action="https://acs-staging.entersoft.academy/login"
          method="POST"
          id="loginForm"
          className="acs-form"
        >
          <input
            type="hidden"
            name="_token"
            value="xLwJMj8XHLMFG5WfE8VqC6ohCVIS8ziUP43rWXyC"
            autocomplete="off"
          />
          <div className="mb-3 input-group custom-input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <TextInput type="email" placeholder="Enter Email" name="email" />
          </div>
          <div className="mb-3 input-group custom-input-group">
            <span className="input-group-text">
              <i className="bi bi-lock-fill"></i>
            </span>

            <TextInput
              type="password"
              placeholder="Enter Password"
              name="password"
              id="passwordInput"
            />

            <span
              className="input-group-text"
              onclick="togglePasswordVisibility()"
              style={{cursor: "pointer"}}
              id="passwordToggleIconContainer"
            >
              <i className="bi bi-eye-slash" id="passwordToggleIcon"></i>
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="rememberMeCheck"
              />
              <label className="label2" for="rememberMeCheck">
                Remember Me
              </label>
            </div>
            <a
              href="https://acs-staging.entersoft.academy/send-password-reset-link"
              className="label2 text-link"
            >
              Forgot Password ?
            </a>
          </div>
          <div className="acs-button-wrapper">
            <PrimaryButton type="submit" label="Login" />
          </div>
        </form>
      </div>
    </BaseLayout>
  )
}

export default Index
export const data = {
  title: "ACS - Entersoft",
}
