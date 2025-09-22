import React from "react"

const TertiaryButton = ({label}) => {
  return (
    <div>
      <button className="btn cta-btn tertiary-btn">{label}</button>
    </div>
  )
}

export default TertiaryButton
export const data = {
  label: "Placeholder",
}
