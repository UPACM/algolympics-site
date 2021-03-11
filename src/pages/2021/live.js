import React from "react"

import Layout from "../../2021/components/layout.js"
import SpacedComponents from "../../2021/components/spaced-components.js"

import Countdown from "../../2021/components/live/countdown.js"
import Scoreboards from "../../2021/components/live/scoreboards.js"

export default function Live() {
  return (
    <Layout isIndex={false} contentClass="incompressible" contentId="mechanics">
      <SpacedComponents>
        <Countdown />
        <Scoreboards />
      </SpacedComponents>
    </Layout>
  )
}
