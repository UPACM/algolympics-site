import React from "react"

import Layout from "2023/components/layout.js"
import AlgolympicsMeta from "2023/components/algolympics-meta.js"
import SpacedComponents from "2023/components/spaced-components.js"

import PrevAlgoProbsets from "2023/components/problems/prev-algo-probsets.js"
import SampleProblems from "2023/components/problems/sample-problems.js"
import PracticeRecommendations from "2023/components/problems/practice-recommendations.js"

export default function Problems() {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2023"
        pageName="Problem Sets"
        sitePage="/2023/problems-2023/"
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
