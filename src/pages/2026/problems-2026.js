import React from "react"

import Layout from "2026/components/layout.js"
import AlgolympicsMeta from "2026/components/algolympics-meta.js"
import SpacedComponents from "2026/components/spaced-components.js"

import PrevAlgoProbsets from "2026/components/problems/prev-algo-probsets.js"
import SampleProblems from "2026/components/problems/sample-problems.js"
import PracticeRecommendations from "2026/components/problems/practice-recommendations.js"

export default function Problems() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2026"
        pageName="Problem Sets"
        sitePage="/2026/problems-2026/"
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
