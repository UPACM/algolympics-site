exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  // redirect these links to the current year
  const currentYear = 2023
  for (const url of [
    "",
    "live/",
    "mechanics/",
    "problems/",
    "faq/",
    "contact/",
  ]) {
    createRedirect({
      fromPath: `/${url}`,
      toPath: `/${currentYear}/${url}`,
      redirectInBrowser: true,
      isPermanent: true,
    })
  }
}
