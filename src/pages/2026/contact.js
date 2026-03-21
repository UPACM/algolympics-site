import React from "react"

import Layout from "2026/components/layout.js"
import AlgolympicsMeta from "2026/components/algolympics-meta.js"
import SpacedComponents from "2026/components/spaced-components.js"
// import ParallaxBackground from "2023/components/parallax-background.js"

import Map from "2026/components/contact/map.js"
import Social from "2026/components/contact/social.js"

import "./contact.scss"

export default function Contact() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2026"
        pageName="Contact Us"
        sitePage="/2026/contact/"
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
