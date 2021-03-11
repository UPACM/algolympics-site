import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./map.scss"

export default function Map() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/location.md/" } }
        ) {
          edges {
            node {
              html
            }
          }
        }
      }
    `
  )

  return (
    <div id="map-section">
      <h1>Location</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />
    </div>
  )
}
