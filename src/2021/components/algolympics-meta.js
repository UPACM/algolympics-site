import React from "react"
import { Helmet } from "react-helmet"
/*
sitePage: page directory of the site, e.g. "/2021/Live"
*/
export default function AlgolympicsMeta({
  algoYear,
  pageName,
  sitePage,
  isIndex,
}) {
  var titleTag = (
    <title>
      {pageName} - Algolympics {algoYear}
    </title>
  )
  if (isIndex) {
    titleTag = <title>Algolympics {algoYear}</title>
  }
  return (
    <Helmet>
      <meta charSet="utf-8" />
      {titleTag}
      <link rel="canonical" href={"https://algolympics.upacm.net" + sitePage} />
    </Helmet>
  )
}
