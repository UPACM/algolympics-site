import React, { useState, useEffect } from "react"

import "./landing.scss"
import contestDetails from "../../data/details.json"

export default function Landing() {
  const [opaque, setOpaque] = useState(false)

  useEffect(() => {
    var limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) / 2

    const handleScroll = () => {
      const isScrolled = window.scrollY > vh

      if (isScrolled !== opaque) {
        setOpaque(!opaque)
      }

      var percent = (window.scrollY * 100) / limit
      percent = String(percent) + "%"
      document.getElementById("landing-image").style.objectPosition =
        "center " + percent
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <>
      <img
        id="landing-image"
        alt="Landing"
        className={opaque ? "scrolled incompressible" : "incompressible"}
        src={contestDetails.landing.staticBgSrc}
      />
      <div id="landing-text" className="incompressible">
        <div className="wrapper">
          <img
            src={contestDetails.landing.bigAlgoLogoSrc}
            alt="Big Algolympics Logo"
          />
          <h1>
            <span className="red">ALGO</span>
            <span className="yellow">LYM</span>
            <span className="green">PICS</span>
            <span className="blue"> 2021</span>
          </h1>
        </div>
      </div>
      <div id="landing-spacer"></div>
    </>
  )
}
