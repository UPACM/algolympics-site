import React from "react"

import Layout from "2022/components/layout.js"
import AlgolympicsMeta from "2022/components/algolympics-meta.js"
import SpacedComponents from "2022/components/spaced-components.js"

import PrevAlgoProbsets from "2022/components/problems/prev-algo-probsets.js"
import SampleProblems from "2022/components/problems/sample-problems.js"
import PracticeRecommendations from "2022/components/problems/practice-recommendations.js"

export default function Problems() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2022"
        pageName="Problem Sets"
        sitePage="/2022/problems-2022/"
      />
      <Layout
        isIndex={false}
        contentClass="incompressible"
        contentId="problems"
      >
        <SpacedComponents>
          <SampleProblems />
          <PrevAlgoProbsets />
          <PracticeRecommendations />
        </SpacedComponents>
      </Layout>
    </>
  )
}
