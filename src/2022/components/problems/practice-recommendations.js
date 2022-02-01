import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./practice-recommendations.scss"

export default function PracticeRecommendations() {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {
          fileAbsolutePath: { regex: "/2022/" },
          frontmatter: { title: { regex: "/Practice Recommendations/" } }
        }) {
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
    <div id="practice-recommendations-section" className="incompressible">
      <div className="title-container">
        <h1>Recommendations</h1>
      </div>

      <div
        id="recommendations-md"
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />
    </div>
  )
}
