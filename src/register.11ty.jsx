import React from "react"

import BaseLayout from "./baseLayout.11ty"
import RegisterForm from "./_includes/components/registerForm/index.11ty"

const Register = ({title}) => {
  return (
    <BaseLayout isLoggedIn={false}>
      <div className="page-content__register">
        <h1 className="display1">
          Register now for the ACS Cyber security micro-credential for educators
        </h1>

        <RegisterForm />
      </div>
    </BaseLayout>
  )
}
export const data = {
  title: "",
}

export default Register
