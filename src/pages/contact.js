import globalDetails from "../data/details.json"

import RedirectedPage from "../components/redirected-page.js"

export default function ContactRedirected() {
  console.log("I was here!");
  return RedirectedPage({
    target: `/${globalDetails.currentYear}/contact/`,
  })
}
