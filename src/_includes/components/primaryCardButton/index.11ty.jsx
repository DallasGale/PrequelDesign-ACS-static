import React from "react"

const PrimaryCardButton = ({label}) => {
  return (
    <div>
      <button className="btn cta-btn primary-card-btn">{label}</button>
    </div>
  )
}

export default PrimaryCardButton
export const data = {
  label: "Placeholder",
}
