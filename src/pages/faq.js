import globalDetails from "../data/details.json"

import RedirectedPage from "../components/redirected-page.js"

export default function FAQRedirected() {
  return RedirectedPage({
    target: `/${globalDetails.currentYear}/faq/`,
  })
}
