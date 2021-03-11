exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // redirect these links to the current year
  const currentYear = 2021
  createRedirect({
    fromPath: "/",
    toPath: `/${currentYear}/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/live/",
    toPath: `/${currentYear}/live/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/mechanics/",
    toPath: `/${currentYear}/mechanics/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/problems/",
    toPath: `/${currentYear}/problems/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/faq/",
    toPath: `/${currentYear}/faq/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/contact/",
    toPath: `/${currentYear}/contact/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
