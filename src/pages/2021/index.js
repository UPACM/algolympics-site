import React from "react"

import Layout from "../../2021/components/layout.js"
import SpacedComponents from "../../2021/components/spaced-components.js"

import Landing from "../../2021/components/index/landing.js"
import AlgoIntro from "../../2021/components/index/algo-intro.js"
import Numbers from "../../2021/components/index/numbers.js"
import Prizes from "../../2021/components/index/prizes.js"
import Sponsors from "../../2021/components/index/sponsors.js"

export default function Home() {
  return (
    <Layout isIndex={true} contentClass="incompressible" contentId="landing">
      <Landing />
      <SpacedComponents>
        <AlgoIntro />
        <Numbers />
        <Prizes />
        <Sponsors />
      </SpacedComponents>
    </Layout>
  )
}
