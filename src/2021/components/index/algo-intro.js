import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./algo-intro.scss"
import contestDetails from "../../data/details.json"

import AOS from "aos"
import "aos/dist/aos.css"

export default function AlgoIntro() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  })

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/algo-intro.md/" } }
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
    <div id="algo-intro-section" className="index-section">
      <div className="title-container">
        <h1 data-aos="fade-up" data-aos-delay="80" data-aos-duration="650">
          What is Algolympics?
        </h1>
      </div>
      <img
        id="intro-image"
        src={contestDetails.intro.staticImageSrc}
        alt="Intro"
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="650"
      />
      <div
        id="intro-md"
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
        data-aos="fade-up"
        data-aos-delay="80"
        data-aos-duration="650"
      />
    </div>
  )
}
