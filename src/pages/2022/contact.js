import React from "react"

import Layout from "2022/components/layout.js"
import AlgolympicsMeta from "2022/components/algolympics-meta.js"
import SpacedComponents from "2022/components/spaced-components.js"
// import ParallaxBackground from "2022/components/parallax-background.js"

import Map from "2022/components/contact/map.js"
import Social from "2022/components/contact/social.js"

import "./contact.scss"

export default function Contact() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2022"
        pageName="Contact Us"
        sitePage="/2022/contact/"
      />
      <Layout isIndex={false} contentClass="incompressible" contentId="contact">
        {/* <ParallaxBackground parallaxSrc="/2022/assets/img/background.png" /> */}
        <SpacedComponents>
          <Map />
          <Social />
        </SpacedComponents>
      </Layout>
    </>
  )
}
