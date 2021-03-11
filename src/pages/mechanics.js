import globalDetails from "../data/details.json"

import RedirectedPage from "../components/redirected-page.js"

export default function MechanicsRedirected() {
  return RedirectedPage({
    target: `/${globalDetails.currentYear}/mechanics/`,
  })
}
