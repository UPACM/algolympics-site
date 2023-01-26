import React from "react"

import Layout from "2023/components/layout.js"
import AlgolympicsMeta from "2023/components/algolympics-meta.js"
import SpacedComponents from "2023/components/spaced-components.js"

import Landing from "2023/components/index/landing.js"
import AlgoIntro from "2023/components/index/algo-intro.js"
import Numbers from "2023/components/index/numbers.js"
import Prizes from "2023/components/index/prizes.js"
import Sponsors from "2023/components/index/sponsors.js"

export default function Home() {
  return (
    <>
      <AlgolympicsMeta algoYear="2023" sitePage="/2023/" isIndex={true} />
      <Layout isIndex={true} contentClass="incompressible" contentId="landing">
        <Landing />
        <SpacedComponents>
          <AlgoIntro />
          <Numbers />
          <Prizes />
          <Sponsors />
        </SpacedComponents>
      </Layout>
    </>
  )
}
