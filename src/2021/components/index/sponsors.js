import React from "react"

import "./sponsors.scss"

import contestDetails from "../../data/details.json"

function Sponsor({ staticLogoSrc, sponsorLink }) {
  return (
    <a className="sponsor" href={sponsorLink}>
      <img src={staticLogoSrc} alt="Static Logo" />
    </a>
  )
}

export default function Sponsors() {
  return (
    <div id="sponsors-section" className="index-section">
      <h1>Our Sponsors</h1>
      <div id="sponsors-container">
        {contestDetails.sponsors.map((sponsor, index) => {
          return (
            <Sponsor
              key={index}
              staticLogoSrc={sponsor.staticLogoSrc}
              sponsorLink={sponsor.sponsorLink}
            />
          )
        })}
      </div>
    </div>
  )
}
