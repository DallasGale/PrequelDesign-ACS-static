import React from "react"
import PrimaryButton from "../primaryButton/index.11ty"

const BadgeRow = () => {
  return (
    <div className="badge-row">
      <img src="../assets/images/badge.png" alt="" width="100%" />
      <div className="badge-row__content">
        <div>
          <h2 className="display2">Course Title</h2>
          <p className="body1">Description</p>
        </div>
        <PrimaryButton label="Share" />
      </div>
    </div>
  )
}

export default BadgeRow
