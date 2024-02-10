import React, { useState, useEffect, useCallback } from "react"
import { Link, withPrefix } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons"

import contestDetails from "2024/data/details.json"

import "./header.scss"

import globalDetails from "data/details.json"

function NavDropdown({ name, links }) {
  const [visible, setVisible] = useState(false)

  const handleKeydown = useCallback(
    event => {
      if (event.key === "Enter") {
        setVisible(!visible)
      }
    },
    [visible]
  )

  return (
    <div className="nav-dropdown navlink-outer">
      <div
        role="button"
        className="nav-dropdown-button"
        tabIndex={0}
        onClick={() => setVisible(!visible)}
        onKeyDown={handleKeydown}
      >
        <span className="navlink">
          {name}&nbsp;
          <FontAwesomeIcon icon={faCaretDown} />
        </span>
      </div>
      <div
        className={
          visible ? "nav-dropdown-content visible" : "nav-dropdown-content"
        }
      >
        {links.map(({ label, href, external }, index) => {
          if (external) {
            return (
              <a key={index} href={href} className="nav-dropdown-link">
                {label}
              </a>
            )
          } else {
            return (
              <Link
                key={index}
                to={href}
                className="nav-dropdown-link"
                activeClassName="nav-dropdown-link"
                onClick={() => setVisible(false)}
              >
                {label}
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}

export default function Header({ isIndex }) {
  const [scrolled, setScrolled] = useState(false)
  const [navbarVisible, setNavbarVisible] = useState(false)

  useEffect(() => {
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) / 2
    const handleScroll = () => {
      const isScrolled = window.scrollY > vh
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener(`scroll`, handleScroll)
    }
  })

  const handleKeydown = useCallback(
    event => {
      if (event.key === "Enter") {
        setNavbarVisible(!navbarVisible)
      }
    },
    [navbarVisible]
  )

  return (
    <>
      <div className={scrolled || !isIndex ? "header" : "header top"}>
        <div className="wrapper">
          <Link to="/2024/">
            <div className="title">
              <img src={withPrefix(contestDetails.headerImg)} alt="Header" />
              <h1>
                <span className="main-orange-algo">ALGOLYMPICS</span>
                <span className="main-yellow-algo"> 2024</span>
              </h1>
            </div>
          </Link>
          <div
            role="button"
            className="navigation-icon"
            tabIndex={0}
            onClick={() => setNavbarVisible(!navbarVisible)}
            onKeyDown={handleKeydown}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>
          <div className={navbarVisible ? "navbar visible" : "navbar"}>
            <nav className="navlinks">
              {/* <Link
                className="navlink live"
                activeClassName="navlink live"
                to="/2023/live/"
              >
                LIVE
              </Link> */}
              <Link
                className="navlink"
                activeClassName="navlink"
                to="/2024/mechanics/"
              >
                Mechanics
              </Link>
              <Link
                className="navlink"
                activeClassName="navlink"
                to="/2024/problems-2024/"
              >
                Problems
              </Link>
              <Link
                className="navlink"
                activeClassName="navlink"
                to="/2024/faq/"
              >
                FAQ
              </Link>
              {/*Commented out these parts, but please revive them if possible*/}
              {/*<NavDropdown
                name="Archive"
                links={globalDetails.yearsLinks.map(
                  ({ year, link, external }) => {
                    return {
                      label: `${year}`,
                      href: link,
                      external,
                    }
                  }
                )}
              />*/}
              <a className="navlink" href="https://upacm.github.io/upacm-portal/">
                UP ACM
                </a>
            </nav>
          </div>
        </div>
      </div>
      {!isIndex ? <div className="header-spacer"></div> : null}
    </>
  )
}
