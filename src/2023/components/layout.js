import React from "react"

import Header from "2023/components/header.js"
import Footer from "2023/components/footer.js"

import "2023/styles/global.scss"

export default function Layout({ isIndex, contentClass, contentId, children }) {
  return (
    <>
      <Header isIndex={isIndex} />
      <div className={"content wrapper " + contentClass} id={contentId}>
        {children}
      </div>
      <Footer />
    </>
  )
}
