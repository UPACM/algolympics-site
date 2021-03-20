import React from "react"

import Layout from "../../2021/components/layout.js"
import AlgolympicsMeta from "../../2021/components/algolympics-meta.js"
import SpacedComponents from "../../2021/components/spaced-components.js"

import Countdown from "../../2021/components/live/countdown.js"
import ElimsScoreboard from "../../2021/components/live/elims-scoreboard.js"
import FinalsScoreboard from "../../2021/components/live/finals-scoreboard.js"

export default function Live() {
  return (
    <>
      <AlgolympicsMeta algoYear="2021" pageName="Live" sitePage="/2021/live/" />
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
