import React from "react"

import Layout from "../../2021/components/layout.js"
import ParallaxBackground from "../../2021/components/parallax-background.js"

import Map from "../../2021/components/contact/map.js"
import Social from "../../2021/components/contact/social.js"

import "./contact.scss"

export default function Contact() {
  return (
    <Layout isIndex={false} contentClass="incompressible" contentId="contact">
      <ParallaxBackground parallaxSrc="/2021/assets/img/background.png" />
      <Map />
      <Social />
    </Layout>
  )
}
