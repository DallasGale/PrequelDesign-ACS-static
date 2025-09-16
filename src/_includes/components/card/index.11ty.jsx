import React from "react"
import PrimaryButton from "../primaryButton/index.11ty"
import PrimaryLink from "../primaryLink/index.11ty"

const Card = ({heading, image}) => {
  return (
    <div className="card">
      <picture className="card__img-wrapper">
        <img src={image} width="100%" height="auto" className="card__img" />
      </picture>

      <div className="card__content">
        <div className="card__content-head">
          <small className="label3 text-dark-navy">Cyber Security</small>
          <small className="label3 text-dark-navy">1hr</small>
        </div>
        <div className="card__content-title">
          <h2 className="display2 text-dark-navy">{heading}</h2>
        </div>
        {/* <div className="card__footer">
          <PrimaryButton label="Enrol" />
          <PrimaryLink label="Course Overview" />
        </div> */}
      </div>
    </div>
  )
}

export default Card
export const data = {
  heading: "Placeholder",
  image: "/assets/images/CourseTile_ACS.png",
}
