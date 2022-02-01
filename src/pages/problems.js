import globalDetails from "../data/details.json"

import RedirectedPage from "../components/redirected-page.js"

export default function ProblemsRedirected() {
  return RedirectedPage({
    target: `/${globalDetails.currentYear}/problems-${globalDetails.currentYear}/`,
  })
}
