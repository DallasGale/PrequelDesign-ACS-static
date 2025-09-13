import React from "react"
import PrimaryButton from "../primaryButton/index.11ty"
import PrimaryLink from "../primaryLink/index.11ty"

const Card = ({heading, image}) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img src={image} width="100%" height="auto" />
      </div>

      <h2 className="display2 text-white">{heading}</h2>
      <div className="card__footer">
        <PrimaryButton label="Enrol" />
        <PrimaryLink label="Course Overview" />
      </div>
    </div>
  )
}

export default Card
export const data = {
  heading: "Placeholder",
  image: "/assets/images/CourseTile_ACS.png",
}
