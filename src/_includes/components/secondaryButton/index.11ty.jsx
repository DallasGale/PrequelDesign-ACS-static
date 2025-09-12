import React from "react"

const SecondaryButton = ({label}) => {
  return (
    <div>
      <button className="btn cta-btn secondary-btn">{label}</button>
    </div>
  )
}

export default SecondaryButton
export const data = {
  label: "Placeholder",
}
