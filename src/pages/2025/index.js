import React from "react"
import Layout from "2025/components/layout.js"
import AlgolympicsMeta from "2025/components/algolympics-meta.js"
import SpacedComponents from "2025/components/spaced-components.js"
import Landing from "2025/components/index/landing.js"
import AlgoIntro from "2025/components/index/algo-intro.js"
import Numbers from "2025/components/index/numbers.js"
import Prizes from "2025/components/index/prizes.js"
import Sponsors from "2025/components/index/sponsors.js"

export default function Home() {
  return (
    <>
      <AlgolympicsMeta algoYear="2025" sitePage="/2025/" isIndex={true} />
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
