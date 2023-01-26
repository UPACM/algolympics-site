import React from "react"

import "./prizes.scss"
import contestDetails from "2023/data/details.json"

import "aos/dist/aos.css"

function Winner({ winnerData }) {
  return (
    <div className="winner">
      <img className="winner-pic" src={winnerData.imgSrc} />
      <img className="school-logo" src={winnerData.logoSrc} />
      <p className="team-name">{winnerData.name}</p>
      <p className="team-school">{winnerData.university}</p>
    </div>
  )
}

function Banner({ place, prize, winner, prevWinner }) {
  var prize_heading = ""
  var trophy_img_src = ""
  var aos_delay = "100"
  switch (place) {
    case "first":
      prize_heading = "1st place"
      trophy_img_src = "/2023/assets/img/trophy-gold.png"
      break
    case "second":
      prize_heading = "2nd place"
      trophy_img_src = "/2023/assets/img/trophy-silver.png"
      aos_delay = "200"
      break
    case "third":
      prize_heading = "3rd place"
      trophy_img_src = "/2023/assets/img/trophy-bronze.png"
      aos_delay = "300"
      break
    default:
      break
  }

  return (
    <div
      className="banner"
      id={place}
      data-aos="fade-up"
      data-aos-delay={aos_delay}
      data-aos-duration="650"
    >
      <img className="trophy-img" alt="Trophy" src={trophy_img_src} />
      <div className="banner-content">
        <div className="prize">
          <h2>{prize_heading}</h2>
          <p>{prize}</p>
        </div>
        <Winner winnerData={prevWinner} />
      </div>
    </div>
  )
}

export default function Prizes() {
  return (
    <div id="prizes-list" className="index-section">
      <h1>Last Year's Winners</h1>
      <div id="prizes-section" className="index-section">
        <Banner
          place="second"
          prize={contestDetails.prizes.second}
          prevWinner={contestDetails.previousWinners.second}
          winner={contestDetails.winners.second}
        />
        <Banner
          place="first"
          prize={contestDetails.prizes.first}
          prevWinner={contestDetails.previousWinners.first}
          winner={contestDetails.winners.first}
        />
        <Banner
          place="third"
          prize={contestDetails.prizes.third}
          prevWinner={contestDetails.previousWinners.third}
          winner={contestDetails.winners.third}
        />
      </div>
    </div>
  )
}
