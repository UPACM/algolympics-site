import React from "react"
import { graphql } from "gatsby"

import Layout from "2026/components/layout.js"
import AlgolympicsMeta from "2026/components/algolympics-meta.js"

import "./faq.scss"

export default function Faq({ data }) {
  return (
    <>
      <AlgolympicsMeta algoYear="2026" pageName="FAQs" sitePage="/2026/faq/" />
      <Layout isIndex={false} contentClass="index" contentId="faq">
        <div id="faq-layout" className="md-layout">
          <h1 id="page-title">Frequently Asked Questions</h1>
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
      fileAbsolutePath: { regex: "/2026/" },
      frontmatter: { title: { regex: "/FAQs/" } }
    }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
