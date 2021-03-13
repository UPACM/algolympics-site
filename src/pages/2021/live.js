import React from "react"

import Layout from "../../2021/components/layout.js"
import AlgolympicsMeta from "../../2021/components/algolympics-meta.js"
import SpacedComponents from "../../2021/components/spaced-components.js"

import Countdown from "../../2021/components/live/countdown.js"
import Scoreboards from "../../2021/components/live/scoreboards.js"

export default function Live() {
  return (
    <>
      <AlgolympicsMeta algoYear="2021" pageName="Live" sitePage="/2021/live/" />
      <Layout isIndex={false} contentClass="incompressible" contentId="live">
        <SpacedComponents>
          <Countdown />
          <Scoreboards />
        </SpacedComponents>
      </Layout>
    </>
  )
}
