import React from "react"
import { graphql } from "gatsby"

import Layout from "../../2021/components/layout.js"

import "./faq.scss"

export default function Faq({ data }) {
  return (
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
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/faq.md/" } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
