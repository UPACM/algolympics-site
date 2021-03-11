import React from "react"

import "./numbers.scss"
import contestDetails from "../../data/details.json"

import "aos/dist/aos.css"

function Number({ value, desc, iconSrc, isSpecial }) {
  if (isSpecial) {
    return (
      <div className="number special">
        <div
          className="val-container"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="650"
        >
          <img className="icon" src={iconSrc} alt="Icon" />
          <h1 className="value">{value}</h1>
        </div>
        <p
          className="description"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="650"
        >
          {desc}
        </p>
      </div>
    )
  }

  return (
    <div
      className="number"
      data-aos="fade-up"
      data-aos-delay="80"
      data-aos-duration="650"
    >
      <div className="val-container">
        <img className="icon" src={iconSrc} alt="Icon" />
        <h1 className="value">{value}</h1>
      </div>
      <p className="description">{desc}</p>
    </div>
  )
}

export default function Numbers() {
  return (
    <div id="numbers-section" className="index-section">
      {contestDetails.numbers.map((number, index) => (
        <Number
          key={index}
          iconSrc={number.staticIconSrc}
          value={number.value}
          desc={number.description}
        />
      ))}
      <Number
        isSpecial={true}
        iconSrc="/2021/assets/img/algolympics-logo-white.png"
        value="One goal"
        desc="Be the best team to win the competition."
      />
    </div>
  )
}
