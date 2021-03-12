import React, { useEffect } from "react"
import { navigate } from "gatsby"

import "./redirected-page.scss"

export default function RedirectedPage({ target }) {
  console.log("Attempting to redirect to", target)

  useEffect(() => {
    navigate(target)
  })

  // feel free to make this nicer
  return (
    <div className="redirect">
      <a href={target}>Click here to proceed to {target}.</a>
    </div>
  )
}
