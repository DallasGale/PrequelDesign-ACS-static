import React from "react"

const PrimaryButton = ({label}) => {
  return (
    <div>
      <button className="btn cta-btn primary-btn">{label}</button>
    </div>
  )
}

export default PrimaryButton
export const data = {
  label: "Placeholder",
}
