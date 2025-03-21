import React from "react"

import Layout from "2025/components/layout.js"
import AlgolympicsMeta from "2025/components/algolympics-meta.js"
import SpacedComponents from "2025/components/spaced-components.js"
// import ParallaxBackground from "2023/components/parallax-background.js"

import Map from "2025/components/contact/map.js"
import Social from "2025/components/contact/social.js"

import "./contact.scss"

export default function Contact() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2025"
        pageName="Contact Us"
        sitePage="/2025/contact/"
      />
      <Layout isIndex={false} contentClass="incompressible" contentId="contact">
        {/* <ParallaxBackground parallaxSrc="/2023/assets/img/background.png" /> */}
        <SpacedComponents>
          <Map />
          <Social />
        </SpacedComponents>
      </Layout>
    </>
  )
}
