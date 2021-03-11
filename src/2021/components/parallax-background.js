import React, { useEffect } from "react"

import "./parallax-background.scss"

export default function ParallaxBackground({ parallaxSrc }) {
  useEffect(() => {
    var limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    )

    const handleScroll = () => {
      var percent = (window.scrollY * 100) / limit
      percent = String(percent) + "%"
      document.getElementById("parallax-background").style.objectPosition =
        "center " + percent
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <img id="parallax-background" src={parallaxSrc} alt="Parallax Background" />
  )
}
