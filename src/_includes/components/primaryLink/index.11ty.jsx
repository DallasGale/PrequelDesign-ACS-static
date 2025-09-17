import React from "react"

const PrimaryLink = ({label, link}) => {
  return (
    <a className="primary-link" href={link}>
      {label}
    </a>
  )
}

export const data = {
  label: "Placeholder",
  link: "",
}
export default PrimaryLink
