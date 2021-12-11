import React from "react"

import Layout from "../../2022/components/layout.js"
import AlgolympicsMeta from "../../2022/components/algolympics-meta.js"
// import SpacedComponents from "../../2022/components/spaced-components.js"

import Landing from "../../2022/components/index/landing.js"
// import AlgoIntro from "../../2022/components/index/algo-intro.js"
// import Numbers from "../../2022/components/index/numbers.js"
// import Prizes from "../../2022/components/index/prizes.js"
// import Sponsors from "../../2022/components/index/sponsors.js"

export default function Home() {
  return (
    <>
      <AlgolympicsMeta algoYear="2022" sitePage="/2022/" isIndex={true} />
      <Layout isIndex={true} contentClass="incompressible" contentId="landing">
        <Landing />
        {/* <SpacedComponents>
          <AlgoIntro />
          <Numbers />
          <Prizes />
          <Sponsors />
        </SpacedComponents> */}
      </Layout>
    </>
  )
}
