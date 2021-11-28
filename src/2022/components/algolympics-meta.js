import React from "react"
import { Helmet } from "react-helmet"
/*
sitePage: page directory of the site, e.g. "/2022/Live"
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
      <meta
        name="Description"
        content="The Algolympics is an annual intercollegiate programming competition open to all interested schools, colleges and universities in the Philippines, inspired by the likes of ICPC."
      />
    </Helmet>
  )
}
