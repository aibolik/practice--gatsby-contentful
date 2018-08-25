module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'w1fxlmsi3y1l',
        accessToken: 'e1d39d4021699cce4d717eb50dce2f894def2d37ba999b3ec1b1efe04d3eb778'
      }
    },
    'gatsby-plugin-react-helmet',
  ],
}
