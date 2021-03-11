import React from "react"

import Layout from "../../2021/components/layout.js"
import SpacedComponents from "../../2021/components/spaced-components.js"

import PrevAlgoProbsets from "../../2021/components/problems/prev-algo-probsets.js"
import SampleProblems from "../../2021/components/problems/sample-problems.js"
import PracticeRecommendations from "../../2021/components/problems/practice-recommendations.js"

export default function Problems() {
  return (
    <Layout isIndex={false} contentClass="incompressible" contentId="problems">
      <SpacedComponents>
        <SampleProblems />
        <PrevAlgoProbsets />
        <PracticeRecommendations />
      </SpacedComponents>
    </Layout>
  )
}
