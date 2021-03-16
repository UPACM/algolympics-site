import React, { useEffect } from "react"
import { navigate } from "gatsby"

import "./redirected-page.scss"
import generalSiteDetails from "../data/details.json";

export default function RedirectedPage({ target, debug }) {
  console.log("Attempting to redirect to", target)

  useEffect(() => {
    if(!debug){
      navigate(target)
    }
  })

  // feel free to make this nicer
  return (
    <div className="redirect">
      <img class="redirect-logo" src={"/" + generalSiteDetails.currentYear + "/assets/img/redirect.webp"} />
      <h2 class="redirect-text">Redirecting...</h2>
      <a href={target} class="redirect-link">
        Click here to proceed to the site immediately
      </a>
    </div>
  )
}
