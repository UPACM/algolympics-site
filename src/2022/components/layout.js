import React from "react"

import Header from "2022/components/header.js"
import Footer from "2022/components/footer.js"

import "2022/styles/global.scss"

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
