/**
 * The Gatsby configuration for the site.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /**Fix this if ever for Github pages */
  siteMetadata: {
    siteUrl: 'https://algolympics.upacm.net/'
  },
  
  plugins: [
    'gatsby-plugin-cname',
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
