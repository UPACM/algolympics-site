import React from "react"
import { Link } from "gatsby"

import "2023/components/footer.scss"
import contestDetails from "2023/data/details.json"

function Social({ type, link }) {
  var social_logo = `/2023/assets/img/social/${type}-logo.png`
  return (
    <a className="social" href={link}>
      <img src={social_logo} alt="Social Logo" />
    </a>
  )
}

function Contact({ type, name, link }) {
  var contact_logo = `/2023/assets/img/social/${type}-logo.png`
  if (link !== "#") {
    return (
      <a className="contact" href={link}>
        <div className="contact-logo">
          <img src={contact_logo} alt="Contact Logo" />
        </div>
        <div className="contact-info">
          <span>{name}</span>
        </div>
      </a>
    )
  } else {
    return (
      <div className="contact">
        <div className="contact-logo">
          <img src={contact_logo} alt="Contact Logo" />
        </div>
        <div className="contact-info">
          <span>{name}</span>
        </div>
      </div>
    )
  }
}

export default function Footer() {
  let year = new Date().getFullYear()
  return (
    <div className="footer incompressible">
      <div className="top">
        <div className="wrapper">
          <div className="other-links section">
            <h2>UP ACM</h2>
            <a className="other-link" href="http://upacm.net">
              Website
            </a>
            <a
              className="other-link"
              href="https://upacm.github.io/acm-website/automaton/"
            >
              Automaton
            </a>
            <a className="other-link" href="http://upacm.net/privacy-policy">
              Privacy Policy
            </a>
          </div>
          <div className="contacts section">
            <h2>
              <Link className="contact-us-link" to="/contact/">Contact Us</Link>
            </h2>
            {contestDetails.contacts.map(contact => {
              return (
                <Contact
                  key={contact.name}
                  link={contact.link}
                  name={contact.name}
                  type={contact.type}
                />
              )
            })}
          </div>
          <div className="socials section">
            <h2>Connect with us!</h2>
            <div className="social-links">
              {contestDetails.socials.map(social => {
                return (
                  <Social
                    key={social.type}
                    type={social.type}
                    link={social.link}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <span className="copyright">
          © {year} Association for Computing Machinery - University of the
          Philippines Diliman Student Chapter, Inc.
        </span>
      </div>
    </div>
  )
}
