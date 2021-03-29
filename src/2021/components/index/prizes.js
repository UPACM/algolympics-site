import React from "react"

import "./prizes.scss"
import contestDetails from "../../data/details.json"

import "aos/dist/aos.css"

function Winner({ winnerData }) {
  return (
    <div className="winner">
      <img className="winner-pic" src={winnerData.imgSrc} />
      <p className="team-name">{winnerData.name}</p>
      <img className="school-logo" src={winnerData.logoSrc} />
      <p className="team-school">
        University of the Philippines - Ateneo University Campus
      </p>
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
      trophy_img_src = "/2021/assets/img/trophy-gold.png"
      break
    case "second":
      prize_heading = "2nd place"
      trophy_img_src = "/2021/assets/img/trophy-silver.png"
      aos_delay = "200"
      break
    case "third":
      prize_heading = "3rd place"
      trophy_img_src = "/2021/assets/img/trophy-bronze.png"
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
      <Winner winnerData={winner} />
      <div className="banner-content">
        <div className="prize">
          <h2>{prize_heading}</h2>
          <p>{prize}</p>
        </div>
        <h3>Last year's {place}</h3>
        <div className="prev-winner">
          <img
            className="winner-profile"
            alt="Profile of previous winner."
            src={prevWinner.profileSrc}
          />
          <img className="team-logo" alt="Team Logo" src={prevWinner.logoSrc} />
          <span className="team-name">{prevWinner.name}</span>
          <span className="team-univ">{prevWinner.university}</span>
        </div>
      </div>
    </div>
  )
}

export default function Prizes() {
  return (
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
  )
}
