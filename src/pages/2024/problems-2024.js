import React from "react"

import Layout from "2024/components/layout.js"
import AlgolympicsMeta from "2024/components/algolympics-meta.js"
import SpacedComponents from "2024/components/spaced-components.js"

import PrevAlgoProbsets from "2024/components/problems/prev-algo-probsets.js"
import SampleProblems from "2024/components/problems/sample-problems.js"
import PracticeRecommendations from "2024/components/problems/practice-recommendations.js"

export default function Problems() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2023"
        pageName="Problem Sets"
        sitePage="/2024/problems-2024/"
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
