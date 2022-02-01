import React from "react"

import Layout from "2022/components/layout.js"
import AlgolympicsMeta from "2022/components/algolympics-meta.js"
import SpacedComponents from "2022/components/spaced-components.js"

import Countdown from "2022/components/live/countdown.js"
import ElimsScoreboard from "2022/components/live/elims-scoreboard.js"
import FinalsScoreboard from "2022/components/live/finals-scoreboard.js"

export default function Live() {
  return (
    <>
      <AlgolympicsMeta algoYear="2022" pageName="Live" sitePage="/2022/algo-2022-live/" />
      <Layout isIndex={false} contentClass="incompressible" contentId="live">
        <SpacedComponents>
          <Countdown />
          <FinalsScoreboard />
          <ElimsScoreboard />
        </SpacedComponents>
      </Layout>
    </>
  )
}
