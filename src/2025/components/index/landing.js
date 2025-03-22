import React, { useState, useEffect } from "react"
import {withPrefix} from 'gatsby'
import "./landing.scss"
import contestDetails from "2025/data/details.json"

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
        src={withPrefix(contestDetails.landing.staticBgSrc)}
      />
      <div class="scrollable-indicator"></div>
      <div id="landing-text" className="incompressible">
        <div className="wrapper">
          <img
            src={withPrefix(contestDetails.landing.bigAlgoLogoSrc)}
            alt="Big Algolympics Logo"
          />
          <h1>
              {/* Delete the arcane class if needed, this code was a little brute force, sorry future webmaster */}
              <span className="main-red-algo2025 arcane">ALGO</span>
              <span className="main-orange-algo2025 arcane">LYM</span>
              <span className="main-green-algo2025 arcane">PICS</span>
              <span className="main-blue-algo2025 arcane"> 2025</span>
          </h1>
        </div>
      </div>
      <div id="landing-spacer"></div>
    </>
  )
}
