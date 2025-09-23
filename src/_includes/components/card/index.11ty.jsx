import React from "react"
import PrimaryLink from "../primaryLink/index.11ty"
import PrimaryCardButton from "../primaryCardButton/index.11ty"

const Card = () => {
  return (
    <div href="/student-dashboard" className="card">
      <picture className="card__img-wrapper">
        <img
          src="/assets/images/entersoft_course-visual.png"
          width="100%"
          height="auto"
          className="card__img"
        />
        <div className="card__watermark">
          <img src="/assets/logo.png" alt="ACS" className="header__img" />
        </div>
      </picture>

      <div className="card__content">
        <div className="card__content-head">
          <small className="label3 text-dark-navy">Cyber Security</small>
          <small className="label3 text-dark-navy">1hr</small>
        </div>
        <div className="card__content-title">
          <h2 className="display3 text-dark-navy">
            Cyber security micro-credential for educators
          </h2>
        </div>
        <div className="card__footer">
          <PrimaryCardButton label="Enrol" />
          <PrimaryLink
            link="/course-details/cyber-security-micro-credential-for-educators"
            label="Course Overview"
          />
        </div>
      </div>
    </div>
  )
}

export default Card
