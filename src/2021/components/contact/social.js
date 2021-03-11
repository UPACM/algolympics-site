import React from "react"

import "./social.scss"
import contestDetails from "../../data/details.json"

function SocialItem({ type, link }) {
  var social_logo = `/2021/assets/img/social/${type}-logo.png`
  return (
    <a className="social-item" href={link}>
      <img src={social_logo} alt="Social Logo" />
      <span>{link}</span>
    </a>
  )
}

export default function Social() {
  return (
    <div id="contact-social-section">
      <h1>Socials</h1>
      <div id="social-list">
        {contestDetails.socials.map(social => {
          return (
            <SocialItem
              key={social.type}
              type={social.type}
              link={social.link}
            />
          )
        })}
      </div>
    </div>
  )
}
