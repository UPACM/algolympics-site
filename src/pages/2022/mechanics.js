import React from "react"
import { graphql } from "gatsby"

import Layout from "2022/components/layout.js"
import AlgolympicsMeta from "2022/components/algolympics-meta.js"

import "./mechanics.scss"

export default function Mechanics({ data }) {
  return (
    <>
      <AlgolympicsMeta
        algoYear="2022"
        pageName="Mechanics"
        sitePage="/2022/mechanics/"
      />
      <Layout isIndex={false} contentClass="index" contentId="mechanics">
        <div id="mechanics-layout" className="md-layout">
          <h1 id="page-title">Mechanics</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html,
            }}
          />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/2022/" },
      frontmatter: { title: { regex: "/Mechanics/" } }
    }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
